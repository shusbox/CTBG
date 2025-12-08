const express = require('express');
const router = express.Router();
const pool = require('../src/db');

router.get('/', async (req, res) => {
  try {
    const query = `
      SELECT 
          a.student_id AS id,
          s.grade,
          s.class_number AS number,
          s.name,
          a.entry_time::date AS date,
          a.entry_time::time AS time,
          CASE 
              WHEN a.entry_time IS NOT NULL AND a.exit_time IS NULL THEN 'entry'
              ELSE 'exit'
          END AS records,
          a.device_id AS device
      FROM access_records a
      JOIN students s ON a.student_id = s.student_id
      ORDER BY a.entry_time DESC;
    `;

    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB 조회 실패' });
  }
});

module.exports = router;