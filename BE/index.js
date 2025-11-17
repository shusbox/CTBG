// i.js
console.log("CTBG 서버가 실행되었습니다!");

// 예시: 간단한 HTTP 서버
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('CTBG 서버 응답 확인!\n');
});

server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});