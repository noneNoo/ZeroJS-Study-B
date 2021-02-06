'use strict';

const service = require('../service/user.service');

// user에 필요한 함수들을 저장하는 곳

//      유저 전체 목록 불러오기 (Get) - Read
const getUsers = function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  res.send(service.getUsers());
};

//      특정 유저 데이터 불러오기 (GET) - Read
const getAUser = function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  const currentUserId = Number(req.params.id);
  res.send(service.getAUser()[currentUserId - 1]);
};

// ______________________________

//      유저 추가 (POST) - Create
const addUser = function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const id = Number(req.body.id);
  const twtId = req.body.twtId;
  const name = req.body.name;

  service.addUser(id, twtId, name);

  res.send(`${name} user Added!`);
};

//      특정 유저 데이터의 일부분 업데이트 (PATCH - 단일 자원을 업데이트) - Update
const patchUser = function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const id = Number(req.params.id);
  const name = req.body.name;
  const twtId = req.body.twtId;

  service.patchUser(id, twtId, name);

  // 업데이트 후 response 출력
  res.send(`success!`);
};

//      전체 유저 업데이트 (PUT - 전체 자원을 업데이트) - Update
const putUsers = function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const newContent = req.body.group;

  service.putUsers(newContent);

  res.send(`success!`);
};

//      특정 유저 삭제하기 (DELETE) - Delete
// 로직 수정 필요
const deleteUser = function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const id = Number(req.params.id);

  service.deleteUser(id);

  res.send(`success!`);
};

// 모듈로 내보내기
module.exports = {
  getUsers: getUsers,
  getAUSer: getAUser,
  addUser: addUser,
  patchUser: patchUser,
  putUsers: putUsers,
  deleteUser: deleteUser,
};
