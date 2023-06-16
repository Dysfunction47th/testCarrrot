
import React from 'react';
import logo from './logo.svg';
import  style from './App.css';
import { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';

import { KAKAO_AUTH_URL } from './Kakao_auth_url';
// import { ABC_NAVER_AUTH_URL } from './Naver_auth_url';


import Kakao  from './auth/kakao';
// import Naver  from './auth/naver';


import  Mainpage  from "./components/Mainpage";
import  LoginScreen  from './components/LoginScreen';
import { useNavigate } from "react-router-dom";





function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(setIsLoggedIn)

  };
  

  return (
    <div className=''>
      

{/* 
      <LoginScreen/>
      <Mainpage/> */}

      {/* {isLoggedIn ? (
        <Mainpage/>
      ) : (
        <LoginScreen handleLogin={handleLogin} />
      )} */}

{/* 
      {isLoggedIn ? (
        <Mainpage/>
        
        // <BrowserRouter>
        //   <Routes>
        //     <Mainpage/>

        //     <Route path="./Mainpage" element={<Mainpage />} />
          
        //   </Routes>
        // </BrowserRouter>
      ) : (
        <LoginScreen/>
        // <LoginScreen handleLogin={handleLogin} />
      )} */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginScreen/>}> </Route>
          {isLoggedIn ? (
            <Route path='./components/Mainpage' element={<Mainpage/>} ></Route>
          ) : null}
        </Routes>
      </BrowserRouter>    

    </div>
  
  
  

  );
}

// export const [isLoggedIn, setIsLoggedIn] = useState(false);

// export const handleLogin = () => {
//   setIsLoggedIn(true);
//   console.log(setIsLoggedIn)

// };

export default App;
