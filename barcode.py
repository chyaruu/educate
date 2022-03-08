import tkinter as tk
from tkinter import messagebox
import barcode
from barcode.writer import ImageWriter
import os
from PIL import ImageDraw , ImageFont,Image,ImageWin
import cv2
import numpy as np
import time
import datetime
import win32print
import win32ui
import math
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# 執行SQL語句(存入)
def write_into_db(id,serial_number3):   
    
    doc = {
        'no':id,
      'paymentaccount': serial_number3
    }
    doc_ref = db.collection("installment").document(str(id))
    doc_ref.set(doc)

# 執行SQL語句(讀取)    
def search_db():
    
    doc_ref = db.collection('installment')
    results = doc_ref.where('no', '==', '3').get()
    results = doc_ref.order_by('no',direction='DESCENDING').limit(1).get() 

    for item in results:
        last_record=item.id
        
    return last_record

#計算虛擬帳號檢碼
def deltaserial(serial_number4):
    virtual=[]
    for x in serial_number4:
        virtual.append(int(x))

    #A類*3 B類*7 C類*1    
    A1=(virtual[0]*3)//1%10
    B1=(virtual[1]*7)//1%10
    C1=(virtual[2]*1)//1%10
    A2=(virtual[3]*3)//1%10
    B2=(virtual[4]*7)//1%10
    C2=(virtual[5]*1)//1%10
    A3=(virtual[6]*3)//1%10
    B3=(virtual[7]*7)//1%10
    C3=(virtual[8]*1)//1%10
    A4=(virtual[9]*3)//1%10
    B4=(virtual[10]*7)//1%10
    C4=(virtual[11]*1)//1%10
    A5=(virtual[12]*3)//1%10
    total=(A1+A2+A3+A4+A5+B1+B2+B3+B4+C1+C2+C3+C4)//1%10
    serial = (10-total)%10
    return(serial)
    
def btn_money():
    year = time_frame_year.get()
    month =time_frame_month.get()
    day = time_frame_day.get()
    while int(day) >25 :
        messagebox.showinfo("錯誤","輸入正確日期(日期小於25)")
        break
    while int(month) >12 :
        messagebox.showinfo("錯誤","輸入正確月份")
        break
    while int(year) >999 :
        messagebox.showinfo("錯誤","輸入正確年份(民國年)")
        break
    money = int(money_entry.get())
    installment = int(installment_entry.get())
    calculate_money = math.floor((money / installment))
    result_label.configure(text ='一期'+ str(calculate_money))
    return calculate_money

#計算金錢餘額
def last_money():
    money = int(money_entry.get())
    installment = int(installment_entry.get())
    calculate_money = money%installment  
    return calculate_money
    
def btn_barcode():
    barcode_fun('code39',btn_money(),last_money(),search_db())
    
def barcode_fun(barcode_type,btn_money,last_money,search_db):
    global count    
    id = int(search_db)+1
    installment = int(installment_entry.get())
    serial_number2="%08d" %id
    serial_number4 = "92229"+str(serial_number2)
    deltaserial(serial_number4)
    serial_num = deltaserial(serial_number4)
    serial_number3 = "0092229"+str(serial_number2)+str(serial_num)
    todaydate = datetime.datetime.today()
    year = time_frame_year.get()
    month =time_frame_month.get()
    day = time_frame_day.get()  
    for i in range(installment):
        money = int(btn_money)
        if i == 0:
           money =  money+int(last_money)
        if money <= 20000:
           codename = "X49"
        elif money >20000 and money< 40001 :
           codename = "X62"
        elif money >40000 and money< 60001:
           codename = "X63"
        else:
            messagebox.showinfo("錯誤","一期金額請小於六萬元")
            break
        
        money = "%09d"%int(money)
        year1 = int(year)
        month1 = int(month)
        day1 = int(day)
        month2 = "%02d" % month1
        day2 = "%02d" % day1  
        GetTodayDate = str(year1)  + str(month2) + str(day2)        
        month_top = GetTodayDate[1:]
        month_bottom = GetTodayDate[3:]
        #計算檢碼
        barone = str(month_top)+str(codename)
        datemoney=month_bottom+money
        #奇數(檢碼第一個數字)
        money_num=""
        super_business=[]
        for y in barone:
            if y=='X':
                y=7
            super_business.append(int(y))
        countodd_top = (super_business[0]+super_business[2]+super_business[4]+7+super_business[8])
        
        virtual_account=[]
        for c in serial_number3:
            virtual_account.append(int(c))
        countodd_mid = (virtual_account[0]+virtual_account[2]+virtual_account[4]+virtual_account[6]+virtual_account[8]+virtual_account[10]+virtual_account[12]+virtual_account[14])
        
        amount_code=[]
        for x in datemoney:
            amount_code.append(int(x))
        countodd_bottom = (amount_code[0]+amount_code[2]+amount_code[4]+amount_code[6]+amount_code[8]+amount_code[10]+amount_code[12])
        odd_number=(countodd_top+countodd_mid+countodd_bottom)%11
        
        if odd_number ==0:
            money_num="A"
        elif odd_number ==10:
            money_num="B"
        else:
            money_num = odd_number        
 
        #偶數(檢碼第二個數字)
        money_num2=""
        counteven_top = (super_business[1]+super_business[3]+super_business[5]+super_business[7])  
        counteven_mid = (virtual_account[1]+virtual_account[3]+virtual_account[5]+virtual_account[7]+virtual_account[9]+virtual_account[11]+virtual_account[13]+virtual_account[15])
        counteven_bottom = (amount_code[1]+amount_code[3]+amount_code[5]+amount_code[7]+amount_code[9]+amount_code[11])
        even_number=(counteven_top+counteven_mid+counteven_bottom)%11
        if even_number ==0:
            money_num2="X"
        elif even_number ==10:
            money_num2="Y"
        else:
            money_num2 = even_number


        
        #產生條碼
        barcode_to_png(barcode_type,barone,route+str(i+1))
        barcode_to_png(barcode_type,serial_number3 ,route+str(i+2))
        barcode_to_png(barcode_type,month_bottom+str(money_num)+str(money_num2)+str(money),route+str(i+3))
        barcode_to_png(barcode_type,"92229"+str(serial_number2)+str(serial_num) ,route+'account'+str(i+2))
        barcode_to_png(barcode_type,str(int(money)),route+'moneybarcode'+str(i+1))       
        #超商貼條碼區
        myfont = ImageFont.truetype('C:\Windows\Fonts\kaiu.ttf',48)
        money_baseimg = Image.open(route+'繳費單.jpg').convert('RGBA')
        drawtext = ImageDraw.Draw(money_baseimg)
        barimg_top = Image.open(route+str(i+1)+'.png')
        barimg_mid = Image.open(route+str(i+2)+'.png')
        barimg_bottom = Image.open(route+str(i+3)+'.png')
        barbox_top = (2000, 350, 2621,513 )
        barregion_top =barimg_top
        barregion_top = barregion_top.resize((barbox_top[2] - barbox_top[0], barbox_top[3] - barbox_top[1]))
        money_baseimg.paste(barregion_top, barbox_top)
        drawtext.text((2020,525), month_top+str(codename), (0,0,0),font=myfont)
        barbox_mid = (2000, 630, 2880,793 )
        barregion_mid =barimg_mid
        barregion_mid = barregion_mid.resize((barbox_mid[2] - barbox_mid[0], barbox_mid[3] - barbox_mid[1]))
        money_baseimg.paste(barregion_mid, barbox_mid)
        drawtext.text((2030,800), serial_number3, (0,0,0),font=myfont)
        barbox_bottom = (2000, 920, 2780,1083 )
        barregion_bottom =barimg_bottom
        barregion_bottom = barregion_bottom.resize((barbox_bottom[2] - barbox_bottom[0], barbox_bottom[3] - barbox_bottom[1]))
        money_baseimg.paste(barregion_bottom, barbox_bottom)
        drawtext.text((2030,1090), month_bottom+str(money_num)+str(money_num2)+money , (0,0,0),font=myfont)
        #全行代收專戶貼區
        #帳號
        myfont2 = ImageFont.truetype('C:\Windows\Fonts\kaiu.ttf',52)        
        drawtext.text((483,509), "92229"+str(serial_number2)+str(serial_num) , (0,0,0),font=myfont2)
        barimg_account = Image.open(route+'account'+str(i+2)+'.png')
        accountbox = (180,567,989,641)
        accountregion =barimg_account
        accountregion = accountregion.resize((accountbox[2] - accountbox[0], accountbox[3] - accountbox[1]))
        money_baseimg.paste(accountregion, accountbox)
        #金額
        drawtext.text((483,655), str(int(money)) , (0,0,0),font=myfont2)
        barimg_money = Image.open(route+'moneybarcode'+str(i+1)+'.png')
        moneybox = (180,711,530,822)
        moneyregion =barimg_money
        moneyregion = moneyregion.resize((moneybox[2] - moneybox[0], moneybox[3] - moneybox[1]))
        money_baseimg.paste(moneyregion, moneybox)
        #右上角繳費期限跟總金額貼圖
        drawtext.text((2391,221), str(int(money)) , (0,0,0),font=myfont2)
        drawtext.text((2113,110), "繳款截止日:"+str(year)+"年"+str(month2)+"月"+str(day2)+ "日" , (0,0,0),font=myfont2)
        money_baseimg.save(route+'test'+str(i+1)+'.png')
        #如果跨年or跨月份
        if int(month) ==12:
            year = (int(year) +1)
            
        month = (int(month) +1)
        
        if day1 == 25:
            month1+=1
            day1 == 1
        if month1 == 12:
            month = 1

        #刪除圖檔
        os.remove(route+str(i+1)+".png")
        os.remove(route+str(i+2)+".png")
        os.remove(route+str(i+3)+".png")
        os.remove(route+'account'+str(i+2)+".png")
        os.remove(route+'moneybarcode'+str(i+1)+'.png') 
        #合併成A4
        #期數為三的倍數
        if (i+1)%3 ==0:
            A4Image = Image.new('RGBA', (2479,3490),"white")
            draw = ImageDraw.Draw(A4Image)
            A4base1 = Image.open(route+'test'+str(i-1)+'.png')
            A4base2 = Image.open(route+'test'+str(i)+'.png')
            A4base3 = Image.open(route+'test'+str(i+1)+'.png')
            A4base1 = A4base1.resize((2400,1050))
            A4base2 = A4base2.resize((2400,1050))
            A4base3 = A4base3.resize((2400,1050))
            A4Image.paste(A4base1,(0,0))
            A4Image.paste(A4base2,(0,1150))
            A4Image.paste(A4base3,(0,2300))
            draw.line((0, 1075, 2479, 1075), (0, 0, 0), 3)
            draw.line((0, 2225, 2479, 2225), (0, 0, 0), 3)
            A4Image.save(route+'Bill'+str(count)+'.png')
            count+=1               
            os.remove(route+'test'+str(i-1)+'.png')
            os.remove(route+'test'+str(i)+'.png')
            os.remove(route+'test'+str(i+1)+'.png')

        #期數餘數為一
        if ((i+1)==installment)and (installment%3) ==1:
            A4Image = Image.new('RGBA', (2479,3490),"white")
            draw = ImageDraw.Draw(A4Image)
            A4base3 = Image.open(route+'test'+str(installment)+'.png')
            A4base3 = A4base3.resize((2400,1050))
            A4Image.paste(A4base3,(0,0))
            draw.line((0, 1075, 2479, 1075), (0, 0, 0), 3)
            A4Image.save(route+'Bill'+str(count)+'.png')
            count+=1               
            os.remove(route+'test'+str(installment)+'.png')
         #期數餘數為二   
        if ((i+1)==installment)and(installment%3) ==2:
            A4Image = Image.new('RGBA', (2479,3490),"white")
            draw = ImageDraw.Draw(A4Image)
            A4base2 = Image.open(route+'test'+str(installment-1)+'.png')
            A4base3 = Image.open(route+'test'+str(installment)+'.png')
            A4base2 = A4base2.resize((2400,1050))
            A4base3 = A4base3.resize((2400,1050))
            A4Image.paste(A4base2,(0,0))
            A4Image.paste(A4base3,(0,1150))
            draw.line((0, 1075, 2479, 1075), (0, 0, 0), 3)
            draw.line((0, 2225, 2479, 2225), (0, 0, 0), 3)
            A4Image.save(route+'Bill'+str(count)+'.png')
            count+=1
            os.remove(route+'test'+str(installment-1)+'.png') 
            os.remove(route+'test'+str(installment)+'.png')        
                    
    write_into_db(id,serial_number3)          
       
    return count,id

def btn_printer():
    global count
    for j in range(count):
        #可以列印區域
        HORZRES = 8
        VERTRES = 10
        #英吋
        LOGPIXELSX = 300
        LOGPIXELSY = 300
        #總面積
        PHYSICALWIDTH = 110
        PHYSICALHEIGHT = 111
        #左、上邊距
        PHYSICALOFFSETX = 1
        PHYSICALOFFSETY = 1
        printer_name = win32print.GetDefaultPrinter ()
        file_name = "Bill"+str(j+1)+".png"
        # 從命名印表機創建設備上下文
        # 並評估紙張的可打印尺寸
        hDC = win32ui.CreateDC ()
        hDC.CreatePrinterDC (printer_name)
        printable_area = hDC.GetDeviceCaps (HORZRES),hDC.GetDeviceCaps (VERTRES)
        printer_size = hDC.GetDeviceCaps (PHYSICALWIDTH),hDC.GetDeviceCaps (PHYSICALHEIGHT)
        printer_margins = hDC.GetDeviceCaps (PHYSICALOFFSETX),hDC.GetDeviceCaps (PHYSICALOFFSETY)
        #如果很寬旋轉圖片
        bmp = Image.open (file_name)
        if bmp.size[0] > bmp.size[1]:
            bmp = bmp.rotate (90)

        ratios = [1.0 * printable_area[0] / bmp.size[0],1.0 * printable_area[1] / bmp.size[1]]
        scale = min (ratios)
        #開始列印
        hDC.StartDoc (file_name)
        hDC.StartPage ()

        dib = ImageWin.Dib (bmp)
        scaled_width,scaled_height = [int (scale * i) for i in bmp.size]
        x1 = int ((printer_size[0] - scaled_width) / 2)
        y1 = int ((printer_size[1] - scaled_height) / 2)
        x2 = x1 + scaled_width
        y2 = y1 + scaled_height
        dib.draw (hDC.GetHandleOutput (),(x1,y1,x2,y2))

        hDC.EndPage ()
        hDC.EndDoc ()
        hDC.DeleteDC ()        

def barcode_to_png(barcode_type,text_str,filename):
    EAN = barcode.get_barcode_class(barcode_type)
    ean = EAN(text_str, writer=ImageWriter())
    ean.save(filename,{"module_width":0.35,"write_text":False})

window = tk.Tk()
window.title('分期付款')
window.geometry('400x300')
window.resizable(width=0, height=0)
window.configure(background='white')
route = './'
count =1
cred = credentials.Certificate(route+'serviceAccount.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
#金額frame
money_frame = tk.Frame(window)
money_frame.configure(background='white')
money_frame.pack(side=tk.TOP)
money_label = tk.Label(money_frame, text='金額',bg = 'white',width=20,anchor='w')
money_label.pack(side=tk.LEFT,pady=8)
money_entry = tk.Entry(money_frame,width=10)
money_entry.pack(side=tk.RIGHT)


#分期frame
installment_frame = tk.Frame(window)
installment_frame.configure(background='white')
installment_frame.pack(side=tk.TOP)
installment_label = tk.Label(installment_frame, text='分期付款',bg = 'white',width=20,anchor='w')
installment_label.pack(side=tk.LEFT)
installment_entry = tk.Entry(installment_frame,width=10)
installment_entry.pack(side=tk.RIGHT)

#繳款期限frame
time_frame = tk.Frame(window)
time_frame.configure(background='white')
time_frame.pack(side=tk.TOP)
time_frame_label = tk.Label(time_frame, text='首次繳款期限\n(民國年月日\n只能填到25日)',bg = 'white',width=19)
time_frame_label.pack(side=tk.LEFT)
time_frame_year = tk.Entry(time_frame,width=5)
time_frame_year.pack(side=tk.LEFT,  pady=5)
time_frame_slash = tk.Label(time_frame,text='/',bg = 'white')
time_frame_slash.pack(side=tk.LEFT,  pady=5)
time_frame_month = tk.Entry(time_frame,width=5)
time_frame_month.pack(side=tk.LEFT,pady=5)
time_frame_slash = tk.Label(time_frame,text='/',bg = 'white')
time_frame_slash.pack(side=tk.LEFT,  pady=5)
time_frame_day = tk.Entry(time_frame,width=5)
time_frame_day.pack( side=tk.LEFT, pady=5)
#輸出框
result_label = tk.Label(window,bg = 'white')
result_label.pack()
result_label.place(x=100,y=150,height=100,width=200)

#送出btn
out_btn=tk.Button(window,text='計算分期金額',command=btn_money,bg = 'white')
out_btn.place(x=60,y=230)
#生成條碼btn
barcode_btn=tk.Button(window,text='生成三聯單',command=btn_barcode,bg = 'white')
barcode_btn.place(x=170,y=230)
#列印btn
printer_btn=tk.Button(window,text='列印',command = btn_printer,bg = 'white')
printer_btn.place(x=270,y=230)

window.mainloop()
