'use strict';

const { put } = require('../routes');

// 유저 목록도 여기로 옮겼다
const userList = [];

const getUsers = async function () {
  return userList;
};

const getAUser = async function () {
  return userList;
};

const addUser = async function (id, twtId, name) {
  const user = {
    id: id,
    twtId: twtId,
    name: name,
  };

  //  userList에 추가해주는 기능이라 리턴은 불필요
  userList.push(user);
  console.log(userList);
};

const patchUser = async function (id, twtId, name) {
  userList.find((user) => {
    if (user.id === id) {
      console.log(`before : ${JSON.stringify(user)}`);
      user.twtId = twtId;
      user.name = name;
      console.log(`after : ${JSON.stringify(user)}`);
    }
  });
};

const putUser = async function (id, twtId) {
  userList.find((user) => {
    if (user.id === id) {
      console.log(`before : ${JSON.stringify(user)}`);
      user.twtId = twtId;
      console.log(`after : ${JSON.stringify(user)}`);
    }
  });
};

const deleteUser = async function (id) {
  const userIdx = userList.findIndex((user) => user.id === id);
  userList.splice(userIdx, 1);
};

module.exports = {
  getUsers: getUsers,
  getAUser: getAUser,
  addUser: addUser,
  patchUser: patchUser,
  putUser: putUser,
  deleteUser: deleteUser,
};
