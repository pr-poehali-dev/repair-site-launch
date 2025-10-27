'''
Business: Отправка статистики посещений по дням в Telegram
Args: event - dict с httpMethod
      context - объект с request_id, function_name
Returns: HTTP response с результатом отправки
'''
import json
import os
import urllib.request
from typing import Dict, Any, List
from datetime import datetime, timedelta
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
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
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not database_url or not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Missing configuration'})
        }
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()
    
    # Получаем статистику за последние 7 дней
    cursor.execute(
        "SELECT visit_date, visit_count FROM daily_visits ORDER BY visit_date DESC LIMIT 7"
    )
    stats = cursor.fetchall()
    
    # Получаем общее количество посещений
    cursor.execute("SELECT visit_count FROM site_visits WHERE id = 1")
    total_result = cursor.fetchone()
    total_visits = total_result[0] if total_result else 0
    
    cursor.close()
    conn.close()
    
    # Формируем сообщение
    message = f"📊 Статистика посещений сайта\n\n"
    message += f"🔢 Всего посещений: {total_visits}\n\n"
    message += "📅 По дням (последние 7 дней):\n"
    
    if stats:
        for date, count in stats:
            formatted_date = date.strftime('%d.%m.%Y')
            message += f"• {formatted_date}: {count} посещений\n"
    else:
        message += "Нет данных\n"
    
    # Отправка в Telegram
    telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = json.dumps({
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }).encode('utf-8')
    
    req = urllib.request.Request(
        telegram_url,
        data=data,
        headers={'Content-Type': 'application/json'},
        method='POST'
    )
    
    with urllib.request.urlopen(req, timeout=10) as response:
        response.read()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'success': True, 'message': 'Stats sent to Telegram'})
    }
