import React from 'react';
import style from "./loginScreen.css";
import { useLocation } from 'react-router-dom';


function Mainpage() {

  // 1. useLocation 훅 취득
  const location = useLocation();

  // 2. location.state 에서 파라미터 취득
  // const id = location.state.id;
  // const date = location.state.date;
  // const nickname = location.state.nickname;

  const id = sessionStorage.getItem('user_id');
  const date = sessionStorage.getItem('user_date');
  const nickname = sessionStorage.getItem('nickname');


  return (
    <div>

      <p> {id} : {nickname} </p>
      <p> time : {date}  </p>

      <h1>Hello, World!</h1>
      <p>This is a paragraph. this is Mainpage</p>
    </div>

  );
}

export default Mainpage;
