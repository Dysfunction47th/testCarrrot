import React from "react";
import { useEffect } from 'react'

const callback = () => {
    const NAVER_CLIENT_ID = "H7vBRF2HVZo8j4M1uqGk";
    const NAVER_CALLBACK_URL = "http://lacalhost:3000/login";

    var naver_id_login = new naver_id_login(NAVER_CLIENT_ID, NAVER_CALLBACK_URL);
    // 접근 토큰 값 출력
    alert(naver_id_login.oauthParams.access_token);
    // 네이버 사용자 프로필 조회
    naver_id_login.get_naver_userprofile("naverSignInCallback()");
    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function

    function naverSignInCallback() {
        alert(naver_id_login.getProfileData('email'));
        alert(naver_id_login.getProfileData('nickname'));
        alert(naver_id_login.getProfileData('age'));
    }


	return (
        <div></div>
		
	)

};



export default callback ;