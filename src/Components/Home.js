import React from 'react';
import Carousel from "react-bootstrap/Carousel";


export default function Home() {
    
  
    
    return (
      <React.Fragment>
        <Carousel prevIcon=""nextIcon="">
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Image/藍banner.svg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Image/粉banner.svg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Image/黃banner.svg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Image/粉banner.svg"
              alt="Four slide"
            />
          </Carousel.Item>
        </Carousel>
        

        <div class="flex flex-col w-full justify-center items-center relative ml-7 h-3/4 w-3/4  ">
            <div>&nbsp;</div>
            <img src="Image/老師介紹icon.png" class="w-14 pb-3" alt=""></img>
            <div class="borderline bordercolor1">
                <p class="teacherself ">老師介紹</p>
            </div>
            
            <div>&nbsp;</div>
            <div class="flex teacherframemain flex-col p-8">
                <div class="flex flex-row "> 
                <div class="flex justify-center  item-center self-center w-1/2 h-20 pr-8 pl-8">
                    <img src="Image/teacher.png" class="teacherimg" alt=""></img>
                </div>
                <div class="flex flex-col justify-end pr-8 pl-8">
                    <p class="teacherfont toteachercolor">Celia English 老師</p>
                    <p class="text-en toteachercolor" >university of pennsymaster of science in education</p>
                    <p class="text-base toteachercolor" >擅於情境式教學，授課活潑、教學靈活，有效開發學員聽、說 、讀、寫能力。精準矯正學員發音，課堂進度掌握準確，文法與會話教學結構完整。</p>
                </div>      
                </div>
                <div class="flex justify-center ">
                    <img class="w-11/12 pt-7" src="Image/down.png" alt=""></img>
                </div>
            </div>
        </div>
        
        <div class="flex flex-col w-full  items-center">
          <div>&nbsp;</div>
          <img src="Image/課程介紹icon.png" class="w-14 pb-3" alt=""/>
          <div class="borderline bordercolor2">
            <p class="teacherself ">課程介紹</p>
          </div>
          <div>&nbsp;</div>
          <div class="flex  items-center courseframe">
            <Carousel indicators={false}>            
              <Carousel.Item>
                <div class="flex flex-row justify-center items-center w-4/5  courseframemain">
                  <div class="flex justify-center p-8 w-4/5"><img src="Image/course1.png" class="d-block  w-4/5 " alt=""/></div>
                  <div class="flex flex-col justify-end p-8">
                    <p class="text-en ">矯正發音 帶你說一口道地英文</p>
                    <p class="text-base ">有扎實的發音基礎，不再害怕新單字<br/>
                      掌握進階發音、語調技巧，口說能力大耀進<br/>
                      深度學習發音規則，英文聽力同步提升<br/>
                      大量課後練習，在家也能天天進步</p>
                    <p class="text-base ">在這堂課中， 除了用「語言學」角度來做教學主軸，也將採用「中文母語者」的角度去詳細解釋中文和英文的發音習慣差異，讓你的英文發音不再「似懂非懂」！</p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="flex flex-row items-center w-4/5  courseframemain">
                  <div class="flex justify-center p-8 w-4/5"><img src="Image/course1.png" class="d-block  w-4/5 " alt=""/></div>
                  <div class="flex flex-col justify-end p-8">
                    <p class="text-en ">矯正發音 帶你說一口道地英文</p>
                    <p class="text-base ">有扎實的發音基礎，不再害怕新單字<br/>
                      掌握進階發音、語調技巧，口說能力大耀進<br/>
                      深度學習發音規則，英文聽力同步提升<br/>
                      大量課後練習，在家也能天天進步</p>
                    <p class="text-base ">在這堂課中， 除了用「語言學」角度來做教學主軸，也將採用「中文母語者」的角度去詳細解釋中文和英文的發音習慣差異，讓你的英文發音不再「似懂非懂」！</p>
                  </div>
                </div>
              </Carousel.Item>

            </Carousel>
        </div>

        </div>



      <div class="flex flex-col w-full  items-center relative ml-7 h-3/4 w-3/4  ">
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <img src="Image/文章icon.png" class="w-14 pb-3" alt=""></img>
      <div class="borderline bordercolor3">
        <p class="teacherself ">精選文章推薦</p>
      </div>
      <div>&nbsp;</div>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col w-1/3 pr-8 pl-8">
            <img src="Image/course.png" class="w-70" alt=""></img>
            <p class="text-recommmed">聊天一定要會的5個 "word"</p>
            <p class="text-recommmedsm">老外說word，不是要你打字！</p>
            <p class="text-recommmeddate">2021.03.08</p>
            <div class="w-11/12 borderline bordercolor3"></div>
          </div>
          <div class="flex flex-col w-1/3 pr-8 pl-8">
            <img src="Image/course.png" class="w-70" alt=""></img>
            <p class="text-recommmed">聊天一定要會的5個 "word"</p>
            <p class="text-recommmedsm">老外說word，不是要你打字！</p>
            <p class="text-recommmeddate">2021.03.08</p>
            <div class="w-11/12 borderline bordercolor3"></div>
          </div>
          <div class="flex flex-col w-1/3 pr-8 pl-8">
            <img src="Image/course.png" class="w-70" alt=""></img>
            <p class="text-recommmed">聊天一定要會的5個 "word"</p>
            <p class="text-recommmedsm">老外說word，不是要你打字！</p>
            <p class="text-recommmeddate">2021.03.08</p>
            <div class="w-11/12 borderline bordercolor3"></div>
          </div>
        </div>
        <div>&nbsp;</div>
        <div class="flex flex-row">
          <div class="flex flex-col w-1/3 pr-8 pl-8">
            <img src="Image/course.png" class="w-70" alt=""></img>
            <p class="text-recommmed">聊天一定要會的5個 "word"</p>
            <p class="text-recommmedsm">老外說word，不是要你打字！</p>
            <p class="text-recommmeddate">2021.03.08</p>
            <div class="w-11/12 borderline bordercolor3"></div>
          </div>
          <div class="flex flex-col w-1/3 pr-8 pl-8">
            <img src="Image/course.png" class="w-70" alt=""></img>
            <p class="text-recommmed">聊天一定要會的5個 "word"</p>
            <p class="text-recommmedsm">老外說word，不是要你打字！</p>
            <p class="text-recommmeddate">2021.03.08</p>
            <div class="w-11/12 borderline bordercolor3"></div>
          </div>
          <div class="flex flex-col w-1/3 pr-8 pl-8">
            <img src="Image/course.png" class="w-70" alt=""></img>
            <p class="text-recommmed">聊天一定要會的5個 "word"</p>
            <p class="text-recommmedsm">老外說word，不是要你打字！</p>
            <p class="text-recommmeddate">2021.03.08</p>
            <div class="w-11/12 borderline bordercolor3"></div>
          </div>
        </div>
      </div>
    </div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div class="flex w-full  justify-center items-center  ml-7 w-50 ">
      <div class="flex justify-center"><button class=" morebtn">MORE</button></div>
    </div>

    </React.Fragment>
    )
  };
