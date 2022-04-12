import React from 'react';

const Hwupdate = () => {
    return (
      <React.Fragment>
        <div class="flex w-full justify-center items-end h-1/2 newstop ">
            <div>        
                <img src="Image/Group_44_3.png" class="w-3/4 " alt=""/>
            </div>
        </div>

        <div class="flex flex-col w-full items-center relative ml-7 h-3/4 ">
            <div>&nbsp;</div>
            <img src="Image/線上作業icon.png" class="w-14 pb-3" alt=""/>
            <div class="borderline bordercolor7">
                <p class="teacherself ">線上作業</p>
            </div>
            <div>&nbsp;</div>
            <div  class="flex flex-col hwupdateframe  p-8 hwmaintext">
                <div class="borderline bordercolor8 hwmaintextbg">
                    <p>英文讀書心得格式說明</p>
                </div>
                <div class="pt-4">
                    <p>書籍基本資料填寫說明</p>
                </div>
                <div>
                    <p>一. 書籍 ISBN：請輸入您所閱讀書籍的 ISBN（國際標準書號）<br/> 共10-13碼數字如：9781905775248。 <br/> 若是以文章為主，或書籍本身沒有 ISBN，則不用輸入 ISBN，該欄位請填寫"無"。 <br/> 方法：翻到書籍的背面，在書籍條碼的上方，你會發現有10-13碼數字， 就是 ISBN，如下圖：</p>
                </div>
                <div><p>書籍背面:</p></div>
                <div class="flex flex-row">
                    <div class="flex justify-end">
                        <img src="../img/book.png" alt="" class="w-3/5"/>
                    </div> 
                    <div class="flex flex-col self-end w-1/2 pl-3">
                        <div class="pl-3"><p>13 碼數字即為 ISBN</p></div>
                        <div><img src="../img/barcode.png" alt="" class="w-1/2"/></div>
                    </div> 
                </div>
                <div>
                    <p>二. 書名  篇名：請完整填寫書名的主標題與副標題，主標題與副標題間請用「：」隔開。</p>
                    <p>三. 書籍作者：若有兩位以上作者，請以「   」符號隔開。</p>
                    <p>四. 出版單位：請填寫出版單位名稱，如 Macmillan......。</p>
                    <p>五. 出版年月：請依西元紀年方式，填寫出版年月。如：2005 年 09 月 01 日。</p>
                </div>
                <div>
                <div>
                    <p>文章版面要求</p></div>
                    <p>一. 字體：Times New Roman； 大小：12</p>
                    <p>二. 段落起始空 5 個字母</p>
                    <p>三. 字數限制為 300 字以上，於心得結尾填寫全文總字數。</p>
                    <p>四. 繳交日期：3 1 前</p>
                    <p>五. 請附上 word 檔寄至 chenhuiliao@shsh.ylc.edu.tw</p>
                </div>
                <div class="borderline">
                    <div><p>寫作範例</p></div>
                    <p>ISBN :</p>
                    <p>Title :</p>
                    <p>Author :</p>
                    <p>Publisher :</p>
                    <p>Date of publication :</p>
                </div>
                <div class="flex w-3/5 ">
         
                </div>

                

            </div>
            
        </div>

        <div class="flex flex-col w-full items-center relative ml-7 ">
            <div>&nbsp;</div>
            <img src="Image/批改作業icon.png" class="w-14 pb-3" alt=""/>
            <div class="borderline bordercolor9">
                <p class="teacherself ">批改作業</p>
            </div>
            <div>&nbsp;</div>
            <div class="updatebottom  h-99 w-3/4"> </div>
        </div>    



        
      </React.Fragment>
    )
  };

export { Hwupdate };