
import logo from './logo.svg';
import  style from './App.css';
import {useEffect, useState} from 'react';
import { KAKAO_AUTH_URL } from './Kakao_auth_url';


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
          naver
        </a>

          


    </div>
  );
}

export default App;
