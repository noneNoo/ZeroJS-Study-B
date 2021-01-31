'use strict';
const express = require('express');

// router 기능 가져오기
const router = express.Router();

// app을 router로 바꿔주었다
router.get('/', function (req, res) {
  console.log(
    `Request from ${req.ip}, method: ${req.method}, path: ${req.path}`
  );
  res.send('express.js로 만든 server의 index입니다.');
});

// router 객체를 모듈화하여 내보내기
module.exports = router;
