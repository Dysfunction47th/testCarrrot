
import React from 'react';
import logo from './logo.svg';
import  style from './App.css';
import {useEffect, useState} from 'react';


import { KAKAO_AUTH_URL } from './Kakao_auth_url';
// import { ABC_NAVER_AUTH_URL } from './Naver_auth_url';


import Kakao  from './auth/kakao';
// import Naver  from './auth/naver';


import  Mainpage  from "./components/Mainpage";
import  LoginScreen  from './components/LoginScreen';


function App() {


  return (
    <div className=''>
      <LoginScreen/>
      {/* <Mainpage/> */}


  

    </div>
    
  );
}

export default App;
