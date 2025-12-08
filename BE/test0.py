# flask_gpio_test.py
from flask import Flask, jsonify
import psycopg2
from gpiozero import Button
import threading
import time

app = Flask(__name__)

# PostgreSQL 설정
DB_CONFIG = {
    'host': 'localhost',
    'port': 5432,
    'database': 'root',
    'user': 'root',
    'password': '1q2w3e'
}

# GPIO 핀 설정 (라즈베리파이 기준, BCM 번호)
FINGER_PIN = 18
finger_sensor = Button(FINGER_PIN)

# DB 등록 함수
def register_fingerprint(student_id, name, class_name, fingerprint_id):
    conn = psycopg2.connect(**DB_CONFIG)
    try:
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO students (student_id, name, class, fingerprint_id) VALUES (%s, %s, %s, %s)",
            (student_id, name, class_name, fingerprint_id)
        )
        conn.commit()
        print(f"DB 등록 완료! {student_id} - {name}")
    except Exception as e:
        print("DB 오류:", e)
    finally:
        conn.close()

# GPIO 이벤트 콜백
def finger_detected():
    print("손가락 감지됨!")
    register_fingerprint('S2025002', '체리', '3-A', 'F123456')

# 센서 모니터링 스레드
def sensor_loop():
    finger_sensor.when_pressed = finger_detected
    # keep thread alive
    while True:
        time.sleep(0.1)

threading.Thread(target=sensor_loop, daemon=True).start()

@app.route('/')
def index():
    return jsonify({'status': 'Flask 서버 실행 중', 'message': '손가락을 GPIO에 연결해 테스트하세요'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
