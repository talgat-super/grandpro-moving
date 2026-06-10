# GrandPro Moving — корпоративный сайт

Сайт мувинговой компании GrandPro Moving (Алматы). Next.js 16 + React 19, мультиязычность (RU/KZ/EN), тёмная/светлая тема, анимированный прелоадер с грузовиком, интерактивная карта 2GIS, форма заявки с отправкой на email через Resend.

## Стек

| Слой | Технология |
|---|---|
| Фреймворк | Next.js 16.2.7 (App Router) + React 19 |
| Стили | Tailwind CSS 4 |
| Анимации | Framer Motion |
| i18n | next-intl (ru / kz / en) |
| Email | Resend API |
| Карта | 2GIS JS API |
| Деплой | Vercel (регион: fra1) |

## Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone https://github.com/talgat-super/grandpro-moving.git
cd grandpro-moving

# 2. Установить зависимости
npm install

# 3. Настроить переменные окружения
cp .env.example .env.local
# Открыть .env.local и вставить ключи (см. раздел «Переменные окружения»)

# 4. Запустить dev-сервер
npm run dev
# Сайт доступен на http://localhost:3000/ru
```

## Переменные окружения

Скопировать `.env.example` в `.env.local` и заполнить:

| Переменная | Описание | Где получить |
|---|---|---|
| `RESEND_API_KEY` | API-ключ Resend для отправки email | [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | Email для получения заявок | Любой ваш email |

> **Важно:** `.env.local` никогда не коммитится в git. Для Vercel — добавить переменные в Project Settings → Environment Variables.

## Структура проекта

```
app/
  [locale]/           # Мультиязычные роуты (ru / kz / en)
    layout.tsx        # Корневой layout: тема из cookie, JSON-LD
    page.tsx          # Главная страница
  api/contact/        # API route: приём заявок → Resend
components/
  layout/             # Header, Footer
  sections/           # Hero, Services, Calculator, Reviews, Contact
  ui/                 # Preloader (SVG грузовик), Map2GIS, SectionHeader
  forms/              # ContactForm, QuickForm
  providers/          # ThemeProvider (dark/light + cookie sync)
lib/
  email.ts            # Resend: шаблон письма с заявкой
messages/             # Переводы: ru.json, kz.json, en.json
```

## Email (Resend)

Заявки с формы отправляются через [Resend](https://resend.com).

- **Текущий sender:** `onboarding@resend.dev` (тестовый домен)
- **Чтобы использовать брендированный адрес** (`no-reply@grandpro.kz`):
  1. Верифицировать домен `grandpro.kz` в Resend Dashboard → Domains
  2. Поменять `from` в `lib/email.ts` на `GrandPro Moving <no-reply@grandpro.kz>`

## Деплой на Vercel

```bash
# Установить Vercel CLI
npm i -g vercel

# Первый деплой
vercel

# Деплой в продакшн
vercel --prod
```

После деплоя добавить переменные `RESEND_API_KEY` и `CONTACT_EMAIL` в Vercel Dashboard → Project → Settings → Environment Variables.

## Скрипты

```bash
npm run dev    # Dev-сервер на localhost:3000
npm run build  # Production-сборка
npm start      # Запуск production-сборки локально
```

## Локализация

Поддерживаемые языки: **ru** (по умолчанию), **kz**, **en**.

Переводы хранятся в `messages/ru.json`, `messages/kz.json`, `messages/en.json`.
Переключение языка — через кнопку в шапке сайта; URL меняется (`/ru`, `/kz`, `/en`).
