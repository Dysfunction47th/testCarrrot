import React from 'react';

import style from "./loginScreen.css";
import { KAKAO_AUTH_URL } from '../Kakao_auth_url';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kakao  from '../auth/kakao';

import { setIsLoggedIn } from "../App";
import { handleLogin } from "../App";

function LoginScreen() {
  



  return (
    <div className='map'>

      <div className="wrap">
        <div className="login">
        
            <h2>Log-in</h2>
            
            
            <a
              className="kakao_btn1"
              href={KAKAO_AUTH_URL} >
              <img src='../asset/kakao/kakao_login_medium_narrow.png' ></img>
              {/* {handleLogin()} */}
            </a>

            
        

            {/* <a
                className="naver_btn"
                href={ABC_NAVER_AUTH_URL} >
                <img src='./asset/naver/btnG_complete.png'></img>
            </a> */}
           
        </div>
    </div>


    </div>
  );
}

export default LoginScreen;
