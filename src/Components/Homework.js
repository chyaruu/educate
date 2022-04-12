import React from 'react';

const Homework = () => {
    return (
      <React.Fragment>
        <div class="flex w-full justify-center items-end h-1/2 newstop ">
          <div>        
            <img src="Image/Group_44_2.png" class="w-3/4 " alt=""/>
          </div>
          <div>&nbsp;</div>
        </div>


        <div class="flex flex-col w-full items-center relative ml-7 h-3/4 ">
          <div>&nbsp;</div>
          <img src="Image/每周作業icon.png" class="w-14 pb-3" alt=""/>
          <div class="borderline bordercolor6">
              <p class="teacherself ">每周作業</p>
          </div>
          <div>&nbsp;</div>
          <div class="flex flex-col justify-center w-3/4 hwframe p-8">
            <div class="flex flex-row">
              
              <div class="flex justify-end w-1/5 pr-3"><p class="weektext">周數</p></div>
              <div class="flex flex-col w-1/5">
                <div><p class="weektext2">第一周</p></div>
                <div><p class="weektext2">第二周</p></div>
              </div>
              <div class="flex w-70"></div>
              <div class="flex justify-start  self-end pb-3">
              <div className="hwDivInput">
                <img src="Image/searchicon.png" className=" w-1/5 "  alt=""></img>
                <input className="hwinput w-28 pl-2 pb-2" type="search"  aria-label="Search"></input>
              </div>  
              </div>
            </div>
            <div class="flex flex-col self-center w-3/4 hwmainframe hwmainline">
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">項次</p></div>
                <div class="flex w-3/5 hwmainline justify-center pt-2 pl-3"><p class="hwtext">作業名稱</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwtext">發表時間</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwtext">繳交時間</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">1</p></div>
                <div class="flex w-3/5 hwmainline pt-2 pl-3"><p class="hwmaintext">英文課本第三課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2021.01.16</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2021.01.20</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">2</p></div>
                <div class="flex w-3/5 hwmainline  pt-2 pl-3"><p class="hwmaintext">英文課本第四課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.12.10</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.12.14</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">3</p></div>
                <div class="flex w-3/5 hwmainline pt-2 pl-3"><p class="hwmaintext">英文課本第五課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.12.01</p></div>
                <div class="flex w-1/4 hwmainline  justify-center pt-2"><p class="hwmaintext">2020.12.05</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">4</p></div>
                <div class="flex w-3/5 hwmainline pt-2 pl-3"><p class="hwmaintext">英文課本第六課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.11.16</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.11.20</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">5</p></div>
                <div class="flex w-3/5 hwmainline pt-2 pl-3"><p class="hwmaintext">英文課本第七課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.11.01</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.11.05</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">6</p></div>
                <div class="flex w-3/5 hwmainline pt-2 pl-3"><p class="hwmaintext">英文課本第八課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.10.31</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.11.04</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">7</p></div>
                <div class="flex w-3/5 hwmainline pt-2 pl-3"><p class="hwmaintext">英文課本第九課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.10.16</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.10.20</p></div>
              </div>
              <div class="flex flex-row">
                <div class="flex w-1/5 hwmainline justify-center pt-2"><p class="hwtext">8</p></div>
                <div class="flex w-3/5 hwmainline pt-2 pl-3"><p class="hwmaintext">英文課本第十課，習作完成</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.10.01</p></div>
                <div class="flex w-1/4 hwmainline justify-center pt-2"><p class="hwmaintext">2020.10.05</p></div>
              </div>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  };

export { Homework };