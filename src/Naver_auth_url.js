import React from 'react';
// const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
// const REDIRECT_URI =  `${process.env.REACT_APP_REDIRECT_URI}`;





    const NAVER_CLIENT_ID = "H7vBRF2HVZo8j4M1uqGk";
    const STATE_STRING =  encodeURI("false");
    const CALLBACK_URL =  "http://localhost:3000/auth/naver";
    // const code
    
    
    // // export const NAVER_NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;
    export const ABC_NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;
    
    // 인가 코드 추출











// function Naver_auth_url() {

//     const NAVER_CLIENT_ID = "H7vBRF2HVZo8j4M1uqGk";
//     const STATE_STRING =  false;
//     const CALLBACK_URL =  "http://localhost:3000/auth/naver";
    
    
    
//     // // export const NAVER_NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;
//     // export const ABC_NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;
    
//     // 인가 코드 추출
    
    // var NAVER_NAVER_AUTH_URL = new naver_id_login(NAVER_CLIENT_ID, CALLBACK_URL);
//     var state = naver_id_login.getUniqState();
    
//     // naver_id_login.setDomain("YOUR_SERVICE_URL");
//     NAVER_NAVER_AUTH_URL.setState(state);
//     NAVER_NAVER_AUTH_URL.setPopup();
    
//     NAVER_NAVER_AUTH_URL.init_naver_id_login();
    
//     return (
//         <div>
//             <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
//             <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>


//         </div>
//     )
        
    
// }

// export default Naver_auth_url;





