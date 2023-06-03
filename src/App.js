
import React from 'react';
import logo from './logo.svg';
import  style from './App.css';
import {useEffect, useState} from 'react';


import { KAKAO_AUTH_URL } from './Kakao_auth_url';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kakao  from './auth/kakao';

function App() {
  return (
    <div className='map'>
        {/* <a
          className="kakao_btn"
          href={KAKAO_AUTH_URL} >
          <img src='./asset/image/kakao_login_medium_narrow.png'></img>
          
        </a>
        <p/>



        <a
          className="App-link"
          href="https://reactjs.org" >
          navers
        </a> */}




      <div className="wrap">
        <div className="login">
            <h2>Log-in</h2>
              <a
              className="kakao_btn"
              href={KAKAO_AUTH_URL} >
              <img src='./asset/image/kakao_login_medium_narrow.png'></img>
            </a>

            


            <a
              className="App-link"
              href="https://reactjs.org" >
              navers
            </a>
           
        </div>
    </div>



        


        <BrowserRouter>
            <Routes>

            
              <Route path="/auth/kakao" element={<Kakao/>}></Route>
          

            </Routes>
			</BrowserRouter>
      
    </div>
  );
}

export default App;
