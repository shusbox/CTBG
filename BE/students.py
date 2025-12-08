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

# 데이터베이스 연결 컨텍스트 매니저
@contextmanager
def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    try:
        yield conn
    finally:
        conn.close()

@app.route('/', methods=['GET'])
def get_access_records():
    """모든 출입 기록을 반환 (React 테이블용)"""
    try:
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            
            # 페이지네이션
            page = request.args.get('page', 1, type=int)
            per_page = request.args.get('per_page', 100, type=int)
            offset = (page - 1) * per_page
            
            # Student, AccessRecord, Device JOIN
            cur.execute("""
                SELECT 
                    s.student_id as id,
                    SUBSTRING(s.class FROM 1 FOR 1) as grade,
                    SUBSTRING(s.class FROM 3) as "classNo",
                    s.name,
                    TO_CHAR(
                        COALESCE(ar.exit_time, ar.entry_time), 
                        'YYYY-MM-DD'
                    ) as date,
                    TO_CHAR(
                        COALESCE(ar.exit_time, ar.entry_time), 
                        'HH24:MI:SS'
                    ) as time,
                    CASE 
                        WHEN ar.type = 'entry' THEN '입실'
                        WHEN ar.type = 'exit' THEN '퇴실'
                        ELSE ar.type
                    END as records,
                    CASE 
                        WHEN d.type = 'fingerprint' THEN '지문인식'
                        WHEN d.type = 'LED' THEN 'LED'
                        WHEN d.type = 'button' THEN '버튼'
                        ELSE d.type
                    END as device
                FROM accessrecord ar
                JOIN student s ON ar.student_id = s.student_id
                LEFT JOIN device d ON ar.device_id = d.device_id
                ORDER BY 
                    COALESCE(ar.exit_time, ar.entry_time) DESC
                LIMIT %s OFFSET %s
            """, (per_page, offset))
            
            records = cur.fetchall()
            return jsonify(records)
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/entry', methods=['POST'])
def add_access_record():
    """새로운 출입 기록 추가"""
    try:
        data = request.get_json()
        
        with get_db_connection() as conn:
            cur = conn.cursor()
            
            # type 매핑 (한글 -> 영문)
            record_type = 'entry' if data.get('records') == '입실' else 'exit'
            
            cur.execute("""
                INSERT INTO accessrecord 
                (student_id, device_id, type, entry_time, exit_time)
                VALUES (%s, %s, %s, %s, %s)
                RETURNING record_id
            """, (
                data.get("id"),  # student_id
                data.get("deviceId", 1),  # device_id (기본값 1)
                record_type,
                datetime.now() if record_type == 'entry' else None,
                datetime.now() if record_type == 'exit' else None
            ))
            conn.commit()
            record_id = cur.fetchone()[0]
            
        return jsonify({
            "message": "Record added successfully",
            "record_id": record_id
        }), 201
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/entry/<int:record_id>', methods=['DELETE'])
def delete_access_record(record_id):
    """특정 출입 기록 삭제"""
    try:
        with get_db_connection() as conn:
            cur = conn.cursor()
            cur.execute("DELETE FROM accessrecord WHERE record_id = %s", (record_id,))
            conn.commit()
            
            if cur.rowcount > 0:
                return jsonify({"message": "Record deleted successfully"}), 200
            return jsonify({"message": "Record not found"}), 404
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/entry/<int:record_id>', methods=['PUT'])
def update_access_record(record_id):
    """특정 출입 기록 수정"""
    try:
        data = request.get_json()
        record_type = 'entry' if data.get('records') == '입실' else 'exit'
        
        with get_db_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                UPDATE accessrecord
                SET student_id = %s,
                    device_id = %s,
                    type = %s,
                    entry_time = %s,
                    exit_time = %s
                WHERE record_id = %s
            """, (
                data.get("id"),
                data.get("deviceId", 1),
                record_type,
                data.get("date") + ' ' + data.get("time") if record_type == 'entry' else None,
                data.get("date") + ' ' + data.get("time") if record_type == 'exit' else None,
                record_id
            ))
            conn.commit()
            
            if cur.rowcount > 0:
                return jsonify({"message": "Record updated successfully"}), 200
            return jsonify({"message": "Record not found"}), 404
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/search', methods=['GET'])
def search_records():
    """출입 기록 검색"""
    try:
        name = request.args.get('name')
        grade = request.args.get('grade')
        date = request.args.get('date')
        record_type = request.args.get('type')  # entry/exit
        
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            
            query = """
                SELECT 
                    s.student_id as id,
                    SUBSTRING(s.class FROM 1 FOR 1) as grade,
                    SUBSTRING(s.class FROM 3) as "classNo",
                    s.name,
                    TO_CHAR(
                        COALESCE(ar.exit_time, ar.entry_time), 
                        'YYYY-MM-DD'
                    ) as date,
                    TO_CHAR(
                        COALESCE(ar.exit_time, ar.entry_time), 
                        'HH24:MI:SS'
                    ) as time,
                    CASE 
                        WHEN ar.type = 'entry' THEN '입실'
                        WHEN ar.type = 'exit' THEN '퇴실'
                        ELSE ar.type
                    END as records,
                    CASE 
                        WHEN d.type = 'fingerprint' THEN '지문인식'
                        WHEN d.type = 'LED' THEN 'LED'
                        WHEN d.type = 'button' THEN '버튼'
                        ELSE d.type
                    END as device
                FROM accessrecord ar
                JOIN student s ON ar.student_id = s.student_id
                LEFT JOIN device d ON ar.device_id = d.device_id
                WHERE 1=1
            """
            params = []
            
            if name:
                query += " AND s.name LIKE %s"
                params.append(f"%{name}%")
            if grade:
                query += " AND s.class LIKE %s"
                params.append(f"{grade}-%")
            if date:
                query += " AND DATE(COALESCE(ar.exit_time, ar.entry_time)) = %s"
                params.append(date)
            if record_type:
                query += " AND ar.type = %s"
                params.append(record_type)
            
            query += " ORDER BY COALESCE(ar.exit_time, ar.entry_time) DESC"
            
            cur.execute(query, params)
            results = cur.fetchall()
            
            return jsonify(results)
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/students', methods=['GET'])
def get_students():
    """모든 학생 목록 조회"""
    try:
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            cur.execute("""
                SELECT 
                    student_id,
                    name,
                    class,
                    fingerprint_id
                FROM student
                ORDER BY class, name
            """)
            students = cur.fetchall()
            return jsonify(students)
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/students/<student_id>', methods=['GET'])
def get_student(student_id):
    """특정 학생 정보 조회"""
    try:
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            cur.execute("""
                SELECT 
                    student_id,
                    name,
                    class,
                    fingerprint_id
                FROM student
                WHERE student_id = %s
            """, (student_id,))
            
            student = cur.fetchone()
            
            if student:
                return jsonify(student)
            return jsonify({"message": "Student not found"}), 404
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/alerts', methods=['GET'])
def get_alerts():
    """경고 로그 조회"""
    try:
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            cur.execute("""
                SELECT 
                    al.alert_id,
                    al.record_id,
                    al.message,
                    al.created_at,
                    s.student_id,
                    s.name
                FROM alertlog al
                JOIN accessrecord ar ON al.record_id = ar.record_id
                JOIN student s ON ar.student_id = s.student_id
                ORDER BY al.created_at DESC
                LIMIT 100
            """)
            alerts = cur.fetchall()
            return jsonify(alerts)
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/devices', methods=['GET'])
def get_devices():
    """기기 목록 조회"""
    try:
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            cur.execute("""
                SELECT 
                    device_id,
                    type,
                    location,
                    status
                FROM device
                ORDER BY device_id
            """)
            devices = cur.fetchall()
            return jsonify(devices)
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/stats', methods=['GET'])
def get_statistics():
    """통계 데이터 조회"""
    try:
        date = request.args.get('date', datetime.now().strftime('%Y-%m-%d'))
        
        with get_db_connection() as conn:
            cur = conn.cursor(cursor_factory=RealDictCursor)
            
            # 오늘 입실/퇴실 통계
            cur.execute("""
                SELECT 
                    type,
                    COUNT(*) as count
                FROM accessrecord
                WHERE DATE(COALESCE(exit_time, entry_time)) = %s
                GROUP BY type
            """, (date,))
            
            stats = cur.fetchall()
            return jsonify(stats)
    except Exception as e:
        print(f"DB 오류: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
