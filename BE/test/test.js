

function waitForFinger() {
  return new Promise((resolve) => {
    console.log('손가락을 센서에 올려주세요...');
    const watcher = fingerSensor.watch((err, value) => {
      if (err) {
        console.error('GPIO 오류:', err);
        return;
      }
      if (value === 1) { // 손가락 감지
        console.log('지문 감지됨!');git 
        fingerSensor.unwatchAll();
        resolve();
      }
    });
  });
}

async function registerFingerprint(studentId, name, className, fingerprintId) {
  const client = new Client(DB_CONFIG);

  try {
    await client.connect();
    const sql = `
      INSERT INTO students (student_id, name, class, fingerprint_id)
      VALUES ($1, $2, $3, $4)
    `;
    await client.query(sql, [studentId, name, className, fingerprintId]);
    console.log('DB에 등록 완료!');
  } catch (err) {
    console.error('DB 등록 오류:', err);
  } finally {
    await client.end();
  }
}

(async () => {
  await waitForFinger();

  // 지문 ID는 센서에서 생성된 ID를 넣어야 함. 예시로 임의 값 사용
  await registerFingerprint('S2025001', '체리', '3-A', 'F123456');

  // GPIO 정리
  fingerSensor.unexport();
})();