import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from "./Auth"

const Footer = () => {  
  return(
  <React.Fragment>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div class="flex justify-center"><img src="Image/last.png" class="w-1/2" alt=""></img></div>
    <div className="flex flex-row lastframe items-center  ml-7 h-3/5 "> 
      <div className="flex w-1/5 justify-center">
        <img src="Image/logo.png" className="w-1/2" alt=""></img>
      </div>
      <div className="flex flex-row w-11/12 ">
        <div className="flex flex-col">
          <div >
            <Link className="nav-link footertext" to="/">
              首頁
            </Link>
          </div>
          <div >
           <Link className="nav-link footertext" to="/">
              老師介紹
            </Link>
          </div>
          <div >
           <Link className="nav-link footertext" to="/">
              課程介紹
            </Link>
          </div>
          <div >
            <Link className="nav-link footertext" to="/">
              精選文章推薦
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div >
            <Link className="nav-link footertext" to="/">
              最新消息
            </Link>
          </div>
          <div>
            <Link className="nav-link footertext" to="/News">
            即時公告
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div >
            <Link className="nav-link footertext" to="/Honor">
            榮譽榜
            </Link>
          </div>
          <div>
            <Link className="nav-link footertext" to="/Honor">
            學測
            </Link>
          </div>
          <div >
            <Link className="nav-link footertext" to="/Honor">
            學年
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <Link className="nav-link footertext" to="/Homework">
            作業區
            </Link>
          </div>
          <div  >
            <Link className="nav-link footertext" to="/Homework">
            每周作業
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (   
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div>
              <Link className="nav-link footertext" to="/Hwupdate">
              作業上傳
              </Link>
            </div>
            <div>
              <Link className="nav-link footertext" to="/Hwupdate">
              線上作業
              </Link>
            </div>
            <div  >
              <Link className="nav-link footertext" to="/Hwupdate">
              批改作業
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Link className="nav-link footertext" to="/Toteacher">
              給老師的話
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Link className="nav-link footertext" to="/SchoolLife">
              校園生活
              </Link>
            </div>
            <div>
              <Link className="nav-link footertext" to="/SchoolLife">
              生活照
              </Link>
            </div>
            <div>
              <Link className="nav-link footertext" to="/SchoolLife">
              活動花絮
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Link className="nav-link footertext" to="/Interact">
              互動討論區
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Link className="nav-link footertext" to="/Download">
              下載區
              </Link>
            </div>
            <div>
              <Link className="nav-link footertext" to="/Download">
              講義
              </Link>
            </div>
            <div>
              <Link className="nav-link footertext" to="/Download">
              單字
              </Link>
            </div>
          </div>

        </div>
        
        ):null
        }
      </div>
      <div className="flex items-end justify-end self-end w-1/3 copytext"><p>Cella English copyright &copy; 2021 Crepowerful</p></div>

    </div >
  </React.Fragment>
  )
}

export default Footer


