'use strict';

// 서비스 불러오기
const service = require('../service/user.service');

// 컨트롤러에서 모두 함수화 시켜주었고
// async문법을 사용했다
// 마지막으로 리턴

//      유저 전체 목록 불러오기 (Get) - Read
const getUsers = async function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  // 서비스에서 필요한 데이터 가져오기
  const data = await service.getUsers();
  res.send(data);
  // 리턴시켜주었다
  return;
};

//      특정 유저 데이터 불러오기 (GET) - Read
const getAUser = async function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  const currentUserId = Number(req.params.id);

  // 서비스에서 필요한 데이터 가져오기
  const data = await service.getAUser();
  res.send(data[currentUserId]);
  // 리턴필수
  return;
};

// ______________________________

//      유저 추가 (POST) - Create
const addUser = async function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const id = Number(req.body.id);
  const twtId = req.body.twtId;
  const name = req.body.name;

  // 서비스 인자로 body 데이터를 내보내면 서비스에서 알아서 기능 작동
  await service.addUser(id, twtId, name);

  res.send(`user Added!`);
  // 리턴 필수
  return;
};

//      특정 유저 데이터의 일부분 업데이트 (PATCH - 단일 자원을 업데이트) - Update
const patchUser = async function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  const currentUserId = Number(req.params.id);

  const id = Number(req.params.id);
  const name = req.body.name;
  const twtId = req.body.twtId;
  await service.patchUser(id, twtId, name);

  // 업데이트 후 response 출력
  res.send(`success!`);
  return;
};

//      전체 유저 업데이트 (PUT - 전체 자원을 업데이트) - Update
const putUser = async function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const id = Number(req.params.id);
  const twtId = req.body.twtId;
  await service.putUser(id, twtId);

  res.send('success');
  return;
};

//      특정 유저 삭제하기 (DELETE) - Delete

const deleteUser = async function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );

  const id = Number(req.params.id);
  await service.deleteUser(id);

  res.send('success');
  return;
};

// 모듈화 시켜 내보내기
module.exports = {
  getUsers: getUsers,
  getAUser: getAUser,
  addUser: addUser,
  patchUser: patchUser,
  putUser: putUser,
  deleteUser: deleteUser,
};
