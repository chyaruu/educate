import React from 'react';
import { Link } from 'react-router-dom';

const Honor = () => {
    return (
      <React.Fragment>
        <div class="flex w-full justify-center items-end h-1/2 newstop ">
        <div>        
          <img src="Image/Group_44_1.png" class="w-3/4 " alt=""></img>
        </div>
      </div>
      <div>&nbsp;</div>

      <div class="flex flex-col w-full items-center relative ml-7 h-3/4">
        <div>&nbsp;</div>
        <img src="../img/榮譽榜學年icon.png" class="w-14 pb-3" alt=""></img>
        <div class="borderline bordercolor5">
            <p class="teacherself ">榮譽榜</p>
        </div>
        <div>&nbsp;</div>
        <div class="flex flex-row honorframe h-3/5 p-8  w-3/5">
          <div class="flex flex-col w-1/3 pt-2 "> 
            <div>
              <Link className="nav-link honorfont honorfontbg" to="/">
                  學測
              </Link>
            </div>
            <div class="flex flex-row honorbackground pt-2 ">
              <Link className="nav-link honorfont honorfontbg" to="/">
                  學年
               </Link>
              <div class="flex flex-col pl-2">
                <Link className="nav-link honorfontsm honorfontsmco" to="/">
                  109上學期
                </Link>
                <Link className="nav-link honorfontsm honorfontsmco" to="/">
                  109下學期
                </Link>
              </div>            
              <div><img src="Image/img1.png" class="h-2 pl-2" alt=""></img></div>
              </div>
            </div>
          <div class="flex flex-col justify-between borderleftline borderleftlinecolor pl-3 pt-2">
            <div class="pt-7">
              <p class="honorfont pb-3">第一次段考英文前三名</p>
              <p class="honorfontsm">吳若寧 96<br/>吳睿穎 96<br/>楊淳羽 93</p>
            </div>
            <div class="pb-7">
              <p class="honorfont pb-3">英文進步前三名</p>
              <p class="honorfontsm">高佳琪<br/>曾筠珊<br/>高佳瑩</p>
            </div>
          </div>
        </div>
      </div>

     
      </React.Fragment>
    )
  };

export { Honor };