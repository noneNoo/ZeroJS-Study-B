'use strict';

// express.js 를 가져온다
const express = require('express');
const app = express();

// 유저 목록
const userList = [];

// 미들웨어 사용 (Body데이터를 json으로 인식해 받아올 수 있는 미들웨어)
app.use(express.json());

// _______________Test
app.get('/', function (req, res) {
  res.send('express.js로 만든 server입니다.');
});

// ______________________________

//      유저 전체 목록 불러오기 (Get) - Read
app.get('/users', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  res.send(userList);
});

//      특정 유저 데이터 불러오기 (GET) - Read
app.get('/user/:id', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  const currentUserId = Number(req.params.id);
  res.send(userList[currentUserId - 1]);
});

// ______________________________

//      유저 추가 (POST) - Create
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
  console.log(req.body);
  res.send(`${user.name} user Added!`);
});

//      특정 유저 데이터의 일부분 업데이트 (PATCH - 단일 자원을 업데이트) - Update
app.patch('/user/:id', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  const currentUserId = Number(req.params.id);

  // 첫 번째 유저
  userList.find((user) => {
    if (user.id === currentUserId) {
      console.log(`before: ${JSON.stringify(user)}`);
      // request body 데이터를 받아와 원본 배열 교체
      user.twtId = req.body.twtId;
      user.name = req.body.name;
      console.log(`updated!!!`);
      console.log(`after: ${JSON.stringify(user)}`);
    }
  });

  console.log(userList[currentUserId - 1]);
  // 업데이트 후 response 출력
  res.send(`success!`);
});

//      전체 유저 업데이트 (PUT - 전체 자원을 업데이트) - Update
app.put('/users', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  for (let i = 0; i < userList.length; i++) {
    userList[i].group = req.body.group;
  }

  console.log(userList);

  res.send(`success!`);
});

//      특정 유저 삭제하기 (DELETE) - Delete

app.delete('/user/:id', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const currentUserIndex = Number(req.params.id) - 1;

  userList.splice(currentUserIndex, 1);
  console.log(userList);
});

// ______________________________

app.listen(3000, function () {
  console.log(`3000번 port에 http server를 띄웠습니다`);
});
