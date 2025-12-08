// index.js
require('dotenv').config();
const express = require('express');
const app = express();

// JSON 바디 파싱 미들웨어
app.use(express.json());

// // 라우터 import

const studentsRouter = require('../routes/students');
// const accessRecordsRouter = require('./routes/accessRecords');
// const adminUsersRouter = require('./routes/adminUsers');
// const alertsRouter = require('./routes/alerts');

// 라우터 연결
app.use('/students', studentsRouter);
// app.use('/access-records', accessRecordsRouter);
// app.use('/admin-users', adminUsersRouter);
// app.use('/alerts', alertsRouter);

// 기본 라우트
app.get('/', (req, res) => {
    res.send('출입 관리 시스템 API 서버가 실행 중입니다.');
});

// 포트 설정
const PORT = process.env.PORT || 3000;

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행: http://localhost:${PORT}`);
});