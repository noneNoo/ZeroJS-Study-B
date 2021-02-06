'use strict';
// express 가져오기
const express = require('express');

// 컨트롤러 가져오기
const controller = require('../controller/user.controller');

// router 기능 가져오기
const router = express.Router();

// ______________________________

//      유저 전체 목록 불러오기 (Get) - Read
router.get('/list', controller.getUsers);

//      특정 유저 데이터 불러오기 (GET) - Read
router.get('/:id', controller.getAUSer);

// ______________________________

//      유저 추가 (POST) - Create
router.post('/', controller.addUser);

//      특정 유저 데이터의 일부분 업데이트 (PATCH - 단일 자원을 업데이트) - Update
router.patch('/:id', controller.patchUser);

//      전체 유저 업데이트 (PUT - 전체 자원을 업데이트) - Update
router.put('/list', controller.putUsers);

//      특정 유저 삭제하기 (DELETE) - Delete
router.delete('/:id', controller.deleteUser);

// ______________________________

// router 객체를 모듈화하여 내보내기
module.exports = router;
