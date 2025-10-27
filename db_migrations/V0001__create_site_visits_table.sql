-- Создание таблицы для хранения счётчика посещений
CREATE TABLE IF NOT EXISTS site_visits (
    id SERIAL PRIMARY KEY,
    visit_count INTEGER NOT NULL DEFAULT 0,
    last_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Инициализация счётчика
INSERT INTO site_visits (visit_count) VALUES (0);