import React from 'react';
import { Link } from 'react-router-dom';

const Parent = () => {
    return (
      <React.Fragment>
        <div>&nbsp;</div>
        <div class="flex flex-col w-1/2 items-center relative ml-7 h-3/4 ">
          <div class="flex justify-center w-1/3  teacherself signcolor borderline bordercolor16"><p>家長登入</p></div>
          <div class="p-8 ">
              <form>
                  <div class="signframe p-2 honorfontbg">帳號<input class="inputsign pl-2" type="text" name="學號"/></div> <br/>
                  <div class="signframe p-2 honorfontbg">密碼<input input class="inputsign pl-2" type="password" name="密碼"/></div>
                  <div class="flex justify-center"><button class="w-50 signbtn">登入</button></div>
                  <div class="flex justify-center">
                    <Link className="nav-link forget" to="/">
                    忘記密碼
                    </Link>
                  </div>
              </form>

          </div>
        </div>
      </React.Fragment>
    )
  };

export { Parent };