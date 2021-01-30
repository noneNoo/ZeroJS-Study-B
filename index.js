'use strict';

// express.js 를 가져온다
const express = require('express');
const app = express();

// 유저 목록
const userList = [];

// 미들웨어 사용 (Body데이터를 json으로 인식)
app.use(express.json());

// _______________Test
app.get('/', function (req, res) {
  res.send('express.js로 만든 server입니다.');
});

// ______________________________

//      유저 전체 목록 불러오기 (Get)
app.get('/users', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  res.send(userList);
});

//      특정 유저 데이터 불러오기 (Get)
app.get('/user/:id', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  const currentUserIdx = Number(req.params.id);
  res.send(userList[currentUserIdx - 1]);
});

// ______________________________

//      유저 추가 (Post)
app.post('/user', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  // http body 에서 받아온 유저데이터
  const user = {
    id: req.body.id,
    twtId: req.body.twtId,
    name: req.body.name,
  };

  // userList에 추가
  userList.push(user);
  // 확인
  console.log(userList);
  res.send(`새 유저 ${user.name}를 추가합니다`);
});

//      특정 유저 데이터 업데이트 (Put)

//      전체 유저 업데이트 (Patch... 보다 Put을 자주 사용한다)

//      특정 유저 삭제하기

// ______________________________

app.listen(3000, function () {
  console.log(`3000번 port에 http server를 띄웠습니다`);
});
