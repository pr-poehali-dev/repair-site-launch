-- Создание таблицы для хранения статистики по дням
CREATE TABLE IF NOT EXISTS daily_visits (
    id SERIAL PRIMARY KEY,
    visit_date DATE NOT NULL UNIQUE DEFAULT CURRENT_DATE,
    visit_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого поиска по дате
CREATE INDEX idx_visit_date ON daily_visits(visit_date);