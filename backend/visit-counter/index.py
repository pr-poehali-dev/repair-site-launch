'''
Business: Подсчёт и возврат количества посещений сайта
Args: event - dict с httpMethod, queryStringParameters
      context - объект с request_id, function_name
Returns: HTTP response с количеством посещений
'''
import json
import os
from typing import Dict, Any
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'DATABASE_URL not configured'})
        }
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()
    
    if method == 'POST':
        # Увеличиваем общий счётчик
        cursor.execute(
            "UPDATE site_visits SET visit_count = visit_count + 1, last_visit = CURRENT_TIMESTAMP WHERE id = 1 RETURNING visit_count"
        )
        result = cursor.fetchone()
        
        # Увеличиваем счётчик за сегодня
        cursor.execute(
            "INSERT INTO daily_visits (visit_date, visit_count, updated_at) VALUES (CURRENT_DATE, 1, CURRENT_TIMESTAMP) ON CONFLICT (visit_date) DO UPDATE SET visit_count = daily_visits.visit_count + 1, updated_at = CURRENT_TIMESTAMP"
        )
        
        conn.commit()
        visit_count = result[0] if result else 0
    else:
        # Просто возвращаем текущее значение
        cursor.execute("SELECT visit_count FROM site_visits WHERE id = 1")
        result = cursor.fetchone()
        visit_count = result[0] if result else 0
    
    cursor.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'visits': visit_count})
    }