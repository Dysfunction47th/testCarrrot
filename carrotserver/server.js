const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 


// (server.js에 추가)

// 별표 * 라는 것은 모든 문자라는 뜻입니다. 

// "고객이 URL란에 아무거나 입력하면 걍 리액트 프로젝트나 보내주셈"이라는 뜻인데 이렇게 하면 리액트 라우팅 잘됩니다. 

// 이 코드는 항상 가장 하단에 놓아야 잘됩니다. 

// 리액트가 라우팅하게 전권을 넘기고 싶다면 server.js 에 다음과 같은 코드를 밑에 추가하십시오. 

app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});


/////////////////////// node+Express사용법

// 4. 터미널을 열어서 npm init -y 입력 

// 5. npm install express 이것도 입력  

 

// 이러면 웹서버만들기 끝입니다.

// 서버 미리보기 띄우고 싶으면 터미널열어서 nodemon server.js를 입력합니다.

// nodemon 이런게 없으면 node server.js 입력해야합니다

// ctrl + c node종료

// 라우팅 : 라우팅이란 한 네트워크에서 다른 네트워크로 패킷을 이동시키는 과정과 네트워크 안의 호스트에게 패킷들을 전달하는 과정을 말한다.
// https://codingapple.com/unit/nodejs-react-integration/ 자세한건 이사이트 참고