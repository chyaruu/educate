import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    return (      
      <React.Fragment>
        <div class="flex w-full justify-center items-end h-1/2 newstop ">
        <div>        
          <img src="Image/news.png" class="w-3/4 " alt=""></img>
        </div>
        <div>&nbsp;</div>
        </div>

        
        <div class="flex flex-col w-full items-center relative ml-7 h-3/4 ">
          <div>&nbsp;</div>
          <img src="Image/newsicon.png" class="w-14 pb-3" alt=""></img>
          <div class="borderline bordercolor4">
              <p class="teacherself ">即時公告</p>
          </div>
          <div>&nbsp;</div>
          <div class="flex flex-col newsframe w-3/4 h-3/5 p-8 justify-between">
              <div class="flex flex-row pt-7">
                  <div class="flex w-1/5 justify-center"><img src="Image/news1.png" class="w-11/12" alt=""></img></div>
                  <div class="flex flex-col self-center w-3/4 pl-3">
                      <p>2021.03.23 (二) 戶外參觀科博館，請準時集合，記得帶水，做好防曬。</p>
                      <Link className="nav-link" to="/">
                      閱讀更多
                      </Link>
                  </div>
                  <div class="flex items-center justify-center"><p class="newsmfont">2021.03.08</p></div>
              </div>

              <div class="flex flex-row pb-7">
                  <div class="flex w-1/5 justify-center"><img src="Image/news2.png" class="w-11/12" alt=""></img></div>
                  <div class="flex flex-col self-center w-3/4 pl-3">
                      <p>2021.03.19 (五) 多益校園英檢班課程，請踴躍報名! </p>
                      <Link className="nav-link" to="/">
                      閱讀更多
                      </Link>
                  </div>
                  <div class="flex items-center justify-end"><p class="newsmfont">2021.03.08</p></div>
              </div>
          </div>
        </div>
    
        
      </React.Fragment>
    )
  };

export { News };