import React from 'react';
import { useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { handleLogin, isLoggedIn } from "./Auth"



const Student = () => {
  const history = useHistory();
  const [userAccount, setUserAccount] = useState({
    username: '',
    password: ''
  });

  const handleUpdate = event => {
    setUserAccount({...userAccount, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin(userAccount)
    history.push('/');
  }

  if (isLoggedIn()) {
    history.push('/');
  }
  
  return (
    <>
        <div>&nbsp;</div>
        <div class="flex flex-col w-1/2 items-center relative ml-7 h-3/4 ">
          <div class="flex justify-center w-1/3  teacherself signcolor borderline bordercolor16"><p>學生登入</p></div>
          <div class="p-8 ">
              <form>
                  <div class="signframe p-2 honorfontbg">學號
                  <input class="inputsign pl-2" 
                  type="text" 
                  name="username" 
                  onChange={handleUpdate}
                  />
                  </div> <br/>
                  <div class="signframe p-2 honorfontbg">密碼
                  <input class="inputsign pl-2" 
                  type="password"              
                  name="password"
                  onChange={handleUpdate}
                  />
                  </div>
                  <div class="flex justify-center"><button class="w-50 signbtn" onClick={handleSubmit}>登入</button></div>
                  <div class="flex justify-center">
                    <Link className="nav-link forget" to="/">
                    忘記密碼
                    </Link>
                  </div>
              </form>

          </div>
        </div>
    </>
  )
}

export default Student

