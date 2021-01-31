'use strict';

// express.js 를 가져온다
const express = require('express');
const app = express();

// Router 가져오기
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

// 미들웨어 사용
// Body데이터를 json으로 인식해 받아올 수 있는 미들웨어
app.use(express.json());

// Router 미들웨어 사용
// index로 routing 될 시
app.use('/', indexRouter);
// user로 routing 될 시
app.use('/user', userRouter);

// ______________________________

app.listen(3000, function () {
  console.log(`3000번 port에 http server를 띄웠습니다`);
});
