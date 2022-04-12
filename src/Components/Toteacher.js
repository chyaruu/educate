import React from 'react';

const Toteacher = () => {
    return (
      <React.Fragment>
        <div class="flex w-full justify-center items-end h-1/2 newstop ">
            <div>        
                <img src="Image/Group_44_4.png" class="w-3/4 " alt=""/>
            </div>
        </div>

        <div class="flex flex-col w-full items-center relative ml-7 h-3/4 ">
        <div>&nbsp;</div>
        <img src="Image/給老師icon.png" class="w-14 pb-3" alt=""/>
        <div class="borderline bordercolor10">
            <p class="teacherself ">給老師的話</p>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div class="flex flex-col w-1/2 toteacherframe">
            <div class="flex flex-row borderline bordercolor8 ">
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>發表時間</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>學生姓名</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>發表主題</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>觀看次數</p></div>
            </div>
            <div class="flex flex-row ">
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>2020.08.21</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>王小明</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>給老師的一封信</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>18</p></div>
            </div>
            <div class="flex flex-row">
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>2020.09.28</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>林小朋</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>老師，教師節快樂</p></div>
                <div class="flex justify-center w-1/4 pt-2 hwmaintext toteachercolor"><p>26</p></div>
            </div>

        </div>


    </div>

        



        
      </React.Fragment>
    )
  };

export { Toteacher };