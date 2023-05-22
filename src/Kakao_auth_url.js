
// const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
// const REDIRECT_URI =  `${process.env.REACT_APP_REDIRECT_URI}`;


const CLIENT_ID = "41c776625164d69e25ac4002bbcfa399";
const REDIRECT_URI =  "http://localhost:3000/auth/kakao";

// 프런트엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

// 백엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:5000/kakao/code";


export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
// window.location.href = REDIRECT_URI;

// 인가 코드 추출

