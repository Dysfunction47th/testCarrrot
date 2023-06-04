//  kakao auth response callback 

// 카카오 로그인 유저 토큰 받아오기 (로그인 api _ access Token , refreshToken, expire ) _ JWT 토큰 교환방식 
// 발급받은 토큰으로 유저 프로필 조회 ( api ) _  카카오가 유저 토큰 확인하고, 허가된 혹은 사용가능한 토큰이면 유저 프로필 줌. _ JSON ,XML, 고유값(ID), 유저이름, 유저닉네임, 유저이메일. 
import React, { useEffect } from "react";
import axios from 'axios';
import qs from  "qs";

import { Profile } from '../Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Kakao() {
    const CLIENT_ID = "b25d6249bc425acccd1f9a1ccf78a06e";
    // console.log("KAKAOAAAA");

    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); // 인가코드 받는 부분
    const grant_type = "authorization_code";
    const client_id = CLIENT_ID ;
    




    // useEffect(()=> {
        // console.log(code);

        
    //     axios.post(`https://kauth.kakao.com/oauth/token?
    //         grant_type=${grant_type} 
    //         &client_id=${client_id}
    //         &redirect_uri= "http://localhost:3000/auth/kakao"
    //         &code=${code}` ,
    //             { 
    //                 headers: {
                        
    //                     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //                 }
            
    //             }).then((res) => {
    //                 console.log(res);
    //                 // const {data} = res;
    //                 // const {access_token} = data;
    //                 // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
    //                 // if (access_token) {
    //                 //     console.log(`Bearer ${access_token}`);
    //                 //     axios.post("http://localhost:3000/auth/kakao" ,
    //                 //     {},
    //                 //     {
    //                 //         headers : {
    //                 //             Authorization: `Bearer ${access_token}` ,
    //                 //             'Content-type': 'application/x-www-form-urlencoded',
    //                 //         },
    //                 //     } 
    //                 //     ).then((res) => {
    //                 //         console.log("데이터 성공 : ");
    //                 //         console.log(res);
    //                 //     })
    //                 // } else {
    //                 //     console.log("access_token 없음!");                      
    //                 // }
    //             })


    const userInfoUrl = "https://kapi.kakao.com/v2/user/me";
    
    var baseURL = "https://kauth.kakao.com/oauth/token"
    
    const userInfoNickname = "" ;
    const userInfoDate = "" ;
    const userInfoId = "" ;
    

    const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: client_id,
        redirect_uri:"http://localhost:3000/auth/kakao",
        code: code
        // 이것들은 kakao 측에서 정해준 형식이므로 key값은 꼭 똑같이 써야합니다!
      });



    axios.post(baseURL,payload,
        {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },

        }).then(res => {
            console.log(res);
             
            //console.log(config);

            axios.get(userInfoUrl , { 
                        headers: {
                            Authorization: `Bearer ${res.data.access_token}`
                        }
                    }
                ).then(resUserInfo =>{
                        console.log(resUserInfo);
                        document.write("id : " + resUserInfo.data.id);
                        document.write("<br>");
                        document.write("date :" + resUserInfo.data.connected_at);
                        document.write("<br>");
                        document.write(resUserInfo.data.kakao_account.profile.nickname)
                        
                        let res_userInfo_id = resUserInfo.data.id;
                        let res_userInfo_date = resUserInfo.data.connected_at;
                        let res_userInfo_nickname = resUserInfo.data.kakao_account.profile.nickname;
                        userInfoId = `${res_userInfo_id}`;
                        userInfoDate = `${res_userInfo_date}`;
                        userInfoNickname = `${res_userInfo_nickname}`;



                    })
        });


        

        
    // }, [])


    
    
    return (
        <div>
            성공
        
            {/* <BrowserRouter>
            <Routes>
   
              <Route path="../Profile" element={<Kakao/>}></Route>
   
   
      
            </Routes>
			</BrowserRouter> */}

        </div>

        
        
      
    );

}

    
    


export default Kakao;



