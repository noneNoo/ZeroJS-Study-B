'use strict';

// controller 함수에 필요한 데이터를 저장하는 곳

// 1. 유저 목록도 여기로 옮겼다
const userList = [];

//      유저 전체 목록 불러오기 (Get) - Read
const getUsers = async function () {
  return userList;
};

//      특정 유저 데이터 불러오기 (GET) - Read
const getAUser = async function () {
  return userList;
};

//      유저 추가 (POST) - Create
const addUser = async function (id, twtId, name) {
  // 인자로 넘겨받은 데이터를 service의 userlist에 push
  const newUser = {
    id: id,
    twtId: twtId,
    name: name,
  };

  // userList에 추가
  userList.push(newUser);
  // 확인
  console.log(userList);
};

//      특정 유저 데이터의 일부분 업데이트 (PATCH - 단일 자원을 업데이트) - Update
const patchUser = async function (id, twtId, name) {
  // 첫 번째 유저
  userList.find((user) => {
    if (user.id === id) {
      console.log(`before: ${JSON.stringify(user)}`);
      // request body 데이터를 받아와 원본 배열 교체
      user.twtId = twtId;
      user.name = name;
      console.log(`updated!!!`);
      console.log(`after: ${JSON.stringify(user)}`);
    }
  });

  console.log(userList[id - 1]);
};

//      전체 유저 업데이트 (PUT - 전체 자원을 업데이트) - Update
const putUsers = async function (newContent) {
  for (let i = 0; i < userList.length; i++) {
    userList[i].group = newContent;
  }

  console.log(userList);
};

//      특정 유저 삭제하기 (DELETE) - Delete
const deleteUser = async function (id) {
  const currentUserIndex = id - 1;

  userList.splice(currentUserIndex, 1);
  console.log(userList);
};

module.exports = {
  getUsers: getUsers,
  getAUser: getAUser,
  addUser: addUser,
  patchUser: patchUser,
  putUsers: putUsers,
  deleteUser: deleteUser,
};
