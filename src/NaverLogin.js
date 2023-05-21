import React from "react";
import { useEffect } from 'react'

const NaverLogin = () => {
    const NAVER_CLIENT_ID = "H7vBRF2HVZo8j4M1uqGk";
    const NAVER_CALLBACK_URL = "http://lacalhost:3000/login";
    const naver_id_login = new naver_id_login(NAVER_CLIENT_ID , NAVER_CALLBACK_URL );
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2,40);
    naver_id_login.setDomain("YOUR_SERVICE_URL");
    naver_id_login.setState(state);
    naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();

	return (
		
         // 구현할 위치에 아래와 같이 코드를 입력해주어야 한다. 
         // 태그에 id="naverIdLogin" 를 해주지 않으면 오류가 발생한다!
			
        <div id="naver_id_login" > </div> 


		
	)

};



export default naverLogin ;