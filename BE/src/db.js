require('dotenv').config();
import 'dovtenv/config';
const { Pool } = require('pg');

// 필요 패키지 설치
// npm install pg onoff

const { Gpio } = require('onoff'); // GPIO 제어
const { Client } = require('pg');  // PostgreSQL

// 지문 센서 테스트용 GPIO
const FINGER_PIN = 18;
const fingerSensor = new Gpio(FINGER_PIN, 'in', 'both');

// PostgreSQL 연결 설정
const DB_CONFIG = {
  host: 'localhost',
  port: 5432,
  database: 'root',
  user: 'root',
  password: '1q2w3e',
};

// Pool 생성
const pool = new Pool(DB_CONFIG);

// DB 연결 테스트
pool.connect()
  .then(client => {
    console.log('PostgreSQL 연결 성공');
    client.release();
  })
  .catch(err => console.error('DB 연결 실패', err));

module.exports = pool;