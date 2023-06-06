
import React from 'react';
import logo from './logo.svg';
import  style from './App.css';
import {useEffect, useState} from 'react';


import { KAKAO_AUTH_URL } from './Kakao_auth_url';
import { ABC_NAVER_AUTH_URL } from './Naver_auth_url';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kakao  from './auth/kakao';
import Naver  from './auth/naver';



function App() {
  return (
    <div className='map'>




      <div className="wrap">
        <div className="login">
            <h2>Log-in</h2>
              <a
              className="kakao_btn"
              href={KAKAO_AUTH_URL} >
              <img src='./asset/kakao/kakao_login_medium_narrow.png' ></img>
              
            </a>

            


            <a
                className="naver_btn"
                href={ABC_NAVER_AUTH_URL} >
                <img src='./asset/naver/btnG_complete.png'></img>


              
            </a>
           
       
        </div>
    </div>



        


        <BrowserRouter>
            <Routes>

            
              <Route path="/auth/kakao" element={<Kakao/>}></Route>
              <Route path="/auth/naver" element={<Naver/>}></Route>

            
            </Routes>
			</BrowserRouter>
      
    </div>
  );
}

export default App;
