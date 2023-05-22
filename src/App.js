
import logo from './logo.svg';
import  style from './App.css';
import {useEffect, useState} from 'react';
import { KAKAO_AUTH_URL } from './Kakao_auth_url';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test2 from './Test2';

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
        <BrowserRouter>
            <Routes>
              <Route path="Test2" element={<Test2 />}></Route>
              {/* <Route path="/auth/kakao" element={<Kakao/>}></Route> */}
              <Route path="./auth/test3" element={<Test3/>}></Route>

              
              
            </Routes>
			</BrowserRouter>
        
    </div>
  );
}

export default App;
