'use strict';
// express 가져오기
const express = require('express');

// router 기능 가져오기
const router = express.Router();

// app을 router로 바꿔주었다
// '/user' 경로를 '/'로 수정하였다

// 유저 목록도 여기로 옮겼다
const userList = [];

//      유저 전체 목록 불러오기 (Get) - Read
router.get('/list', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  res.send(userList);
});

//      특정 유저 데이터 불러오기 (GET) - Read
router.get('/:id', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  const currentUserId = Number(req.params.id);
  res.send(userList[currentUserId - 1]);
});

// ______________________________

//      유저 추가 (POST) - Create
router.post('/', function (req, res) {
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
router.patch('/:id', function (req, res) {
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
router.put('/list', function (req, res) {
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

router.delete('/:id', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const currentUserIndex = Number(req.params.id) - 1;

  userList.splice(currentUserIndex, 1);
  console.log(userList);
});

// router 객체를 모듈화하여 내보내기
module.exports = router;
