const express = require('express');
const router = express.Router();
const pool = require('./db');

// 학생 목록 조회
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('select * from students');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB 조회 실패' });
  }
});

module.exports = router;