import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import {  isLoggedIn, logout } from "./Auth"


const Navbar = () => {
  const history = useHistory();
  return (
    <div>

      <nav className="flex navbar navbar-expand-sm navbar-light ">

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="flex collapse navbar-collapse p-2 " >
          <ul className="flex navbar-nav items-end w-4/5">
            <div className="flex flex-row items-end w-full">
            <img src="Image/logo.png" className="w-28 pr-3" alt=""></img>
            <li className="nav-item ">
              <img src="Image/首頁icon.png" className=" w-1/2 " alt=""></img>
              <Link className="nav-link " to="/">
                首頁
              </Link>
            </li>
            <li className="nav-item ">
              <img src="Image/最新消息icon.png" className="topimg w-1/2 " alt=""></img>
              <Link className="nav-link" to="/News">
              最新消息
              </Link>
            </li>
            <li className="nav-item">
              <img src="Image/榮譽榜icon.png" className="topimg w-3/5 " alt=""></img>
              <Link className="nav-link pl-3"  to="/Honor">
              榮譽榜
              </Link>
            </li>
            <li className="nav-item ">
              <img src="Image/作業區icon.png" className="topimg w-1/2 " alt=""></img>
              <Link className="nav-link" to="/Homework">
              作業區
              </Link>
            </li>  
            

            {isLoggedIn() ? (   
            <div className="flex flex-row  items-end ">
              <li className="nav-item ">
                <img src="Image/作業上傳icon.png" className="topimg w-1/2 " alt=""></img>
                <Link className="nav-link" to="Hwupdate">
                  作業上傳
                </Link>
              </li>
              <li className="nav-item">
                <img src="Image/給老師的話icon.png" className="topimg w-1/2 " alt=""></img>
                <Link className="nav-link" to="/Toteacher">
                給老師的話
                </Link>
              </li>
              <li className="nav-item">
                <img src="Image/校園生活icon.png" className="topimg w-3/5 " alt=""></img>
                <Link className="nav-link pl-3"  to="/SchoolLife">
                校園生活
                </Link>
              </li>
              <li className="nav-item">
                <img src="Image/互動討論區icon.png" className="topimg w-1/2 " alt=""></img>
                <Link className="nav-link" to="/Interact">
                互動討論區
                </Link>
              </li>    
              <li className="nav-item">
                <img src="Image/下載區icon.png" className="topimg w-1/2 " alt=""></img>
                <Link className="nav-link pl-3" to="/Download">
                下載區
                </Link>
              </li>   
            </div>

            ):null }
             </div>   
          </ul>

          {isLoggedIn() ? (

            <div className="flex navbar-nav items-end self-end">
              <li className="flex flex-col items-end">
                  <img src="Image/學生登出icon.png" className="flex topimg rightimg w-1/5  " alt=""></img>
                  <Link className="nav-link" onClick={event => {
                    event.preventDefault()
                    logout(() =>  history.push(`/`))
                    }}>
                    學生登出
                  </Link>
              </li>
              <div className="flex navDivInput">
                  <img src="Image/searchicon.png" className=" w-1/5"  alt=""></img>
                  <input className="navinput  w-28 pl-2 pb-7" type="search"  aria-label="Search"></input>
              </div>  
            </div>
          
        ) : 
          <ul className="flex navbar-nav items-end self-end w-1/4">
            <li className="nav-item  ">
                <img src="Image/登入icon.png" className="topimg w-1/2 " alt=""></img>
                <Link className="nav-link" to="/Student">
                學生登入
                </Link>
              </li>
              <li className="nav-item ">
                <img src="Image/家長註冊icon.png" className="topimg w-1/2 " alt=""></img>
                
                <Link className="nav-link" to="/Parent">
                家長註冊
                </Link>
              </li>      
              <div className="navDivInput">
                <img src="Image/searchicon.png" className=" w-1/5"  alt=""></img>
                <input className="navinput w-28 pl-2 pb-2" type="search"  aria-label="Search"></input>
              </div>  
            </ul>
        }
          
        </div>

      </nav>
    </div>
  )
}

export default Navbar



