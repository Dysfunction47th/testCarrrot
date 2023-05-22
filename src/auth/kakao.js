//  kakao auth response callback 

// 카카오 로그인 유저 토큰 받아오기 (로그인 api _ access Token , refreshToken, expire ) _ JWT 토큰 교환방식 
// 발급받은 토큰으로 유저 프로필 조회 ( api ) _  카카오가 유저 토큰 확인하고, 허가된 혹은 사용가능한 토큰이면 유저 프로필 줌. _ JSON ,XML, 고유값(ID), 유저이름, 유저닉네임, 유저이메일. 
import React, { useEffect } from "react";
import axios from 'axios';

console.log("aaa");


function Kakao() {
    // const CLIENT_ID = "41c776625164d69e25ac4002bbcfa399";
    // console.log("aA");
    // useEffect(()=> {
        
    //     let params = new URL(document.location.toString()).searchParams;
    //     let code = params.get("code"); // 인가코드 받는 부분
    //     let grant_type = "authorization_code";
    //     let client_id = CLIENT_ID ;
    //     console.log(code);
    //     axios.post(`https://kauth.kakao.com/oauth/token?
    //         grant_type=${grant_type}
    //         &client_id=${client_id}
    //         &redirect_uri= "http://localhost:3000/kakao"
    //         &code=${code}`
    //         , {
    //     headers: {
    //         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //     }
    //   }).then((res) => {
    //       console.log(res)
    //       // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
    //   })
    //   }, [])
        

    return <div>사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면 된다.</div>;
    console.log("a");
}


export default Kakao;


