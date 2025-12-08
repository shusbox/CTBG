from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
from datetime import datetime
from contextlib import contextmanager

app = Flask(__name__)
CORS(app)

# PostgreSQL 설정
DB_CONFIG = {
    'host': 'localhost',
    'port': 5432,
    'database': 'root',
    'user': 'root',
    'password': '1q2w3e'
}

@contextmanager
def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    try:
        yield conn
    finally:
        conn.close()

@app.route('/', methods=['GET'])
def get_access_records():
    try:
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            
            page = request.args.get('page', 1, type=int)
            per_page = request.args.get('per_page', 100, type=int)
            offset = (page - 1) * per_page
            
            cur.execute("""
                SELECT 
                    s.student_id as id,
                    SUBSTRING(s.class FROM 1 FOR 1) as grade,
                    SUBSTRING(s.class FROM 3) as "classNo",
                    s.name,
                    TO_CHAR(COALESCE(ar.exit_time, ar.entry_time), 'YYYY-MM-DD') as date,
                    TO_CHAR(COALESCE(ar.exit_time, ar.entry_time), 'HH24:MI:SS') as time,
                    CASE 
                        WHEN ar.type = 'entry' THEN '입실'
                        WHEN ar.type = 'exit' THEN '퇴실'
                        ELSE ar.type
                    END as records,
                    COALESCE(CAST(ar.device_id AS TEXT), '알 수 없음') as device
                FROM access_records ar
                JOIN students s ON ar.student_id = s.student_id
                ORDER BY COALESCE(ar.exit_time, ar.entry_time) DESC
                LIMIT %s OFFSET %s
            """, (per_page, offset))
            
            records = cur.fetchall()
            return jsonify(records)
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/register', methods=['POST'])
def register_student():
    try:
        data = request.form
        grade = data['grade']
        classNo = data['classNo']
        number = data['number']
        name = data['name']
        finger_id = data['fingerPrintId']

        student_id = f"S{datetime.now().year}{grade}{classNo}{number}"
        student_class = f"{grade}{classNo}"  # class 컬럼용

        with get_db_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO students(student_id, name, class, fingerprint_id)
                VALUES (%s, %s, %s, %s)
            """, (student_id, name, student_class, finger_id))
            conn.commit()

        return jsonify({"success": True, "student_id": student_id})

    except psycopg2.errors.UniqueViolation:
        return jsonify({"success": False, "error": "이미 등록된 학생입니다."}), 400
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
