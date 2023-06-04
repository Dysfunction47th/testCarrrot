import React, { useEffect } from "react";
import axios from 'axios';
import qs from  "qs";



function naver() {
    const NAVER_CLIENT_ID = "H7vBRF2HVZo8j4M1uqGk";
    const CALLBACK_URL =  "http://localhost:3000/auth/naver";
    const CLIENT_SECRET = "hUgaL2cqGT";

    
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); // 인가코드 받는 부분
    const grant_type = "authorization_code";
    const client_id = NAVER_CLIENT_ID ;
    const client_secret = CLIENT_SECRET;
    const callback = CALLBACK_URL;
    const state = "test";

    // const NAVER_REQUEST_URL = `https://nid.naver.com/oauth2.0/token?grant_type=${grant_type}
    //                                                                 &client_id=${client_id}
    //                                                                 &client_secret=${client_secret}    
    //                                                                 &code=${code}
    //                                                                 &state=${state}  `;



    const NAVER_REQUEST_URL = `https://nid.naver.com/oauth2.0/token`
                                                                   
    // console.log(NAVER_REQUEST_URL);


    
    const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: client_id,
        client_secret: client_secret,
        code: code,
        state: state
        // 이것들은 kakao 측에서 정해준 형식이므로 key값은 꼭 똑같이 써야합니다!
      });



    axios.post(NAVER_REQUEST_URL , payload , {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }).then(res => {
        console.log(res);
    })
    

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



export default naver;



