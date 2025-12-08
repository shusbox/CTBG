// 필요 패키지 설치
// npm install serialport

const { SerialPort } = require('serialport');

// 시리얼 포트 설정 (센서 연결 확인 필요)
const SENSOR_PORT = '/dev/ttyAMA0';  // 센서 포트 확인 필요
const BAUD_RATE = 57600;

// 시리얼 포트 객체 생성
const sensor = new SerialPort({ path: SENSOR_PORT, baudRate: BAUD_RATE });

// 지문 읽기 함수
function readFingerprint() {
  return new Promise((resolve, reject) => {
    console.log('센서에서 지문 읽는 중...');

    // 실제 R305 명령 전송 및 응답 처리 필요
    // 예시: 일정 시간 후 임의 값 반환 (시뮬레이션)
    setTimeout(() => {
      const fingerprintValue = 'F123456'; // 실제 센서에서 받은 값으로 교체
      console.log('지문 값:', fingerprintValue);
      console.log('데이터 타입:', typeof fingerprintValue);
      resolve(fingerprintValue);
    }, 1000);

    // 실제 사용 시 아래처럼 시리얼 쓰기/읽기 필요
    // sensor.write(Buffer.from([0xEF, 0x01, ...])); // R305 명령 패킷
    // sensor.on('data', (data) => { parseFingerprintData(data); });
  });
}

// 실행
(async () => {
  try {
    const fingerprint = await readFingerprint();
    console.log('읽은 지문 ID를 다른 용도로도 사용할 수 있습니다:', fingerprint);
  } catch (err) {
    console.error('지문 읽기 오류:', err);
  } finally {
    sensor.close();
  }
})();