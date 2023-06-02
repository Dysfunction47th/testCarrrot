
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
        <a
          className="kakao_btn"
          href={KAKAO_AUTH_URL} >
          kakao
        </a>
        <p/>
        <a
          className="App-link"
          href="https://reactjs.org" >
          navers
        </a>

        
        <BrowserRouter>
            <Routes>
   
              <Route path="/auth/kakao" element={<Kakao/>}></Route>
   
   
              
            </Routes>
			</BrowserRouter>
      
    </div>
  );
}

export default App;
