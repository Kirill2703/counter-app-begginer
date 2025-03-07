# Counter App — Учебный проект для начинающих

![Counter App Screenshot](./public/screenshot_counter.jpg)  
*Простой счетчик с красивыми стилями и анимациями*

## О проекте
Это простое приложение-счетчик, которое я создал, чтобы показать, как использовать **React** для управления состоянием и **CSS** для стилизации. Если вы новичок в программировании, этот проект — отличный способ научиться основам фронтенда!

### Что вы узнаете:
- Как настроить React-проект.
- Как использовать хук `useState` для управления состоянием.
- Как писать красивые стили с анимациями и адаптивностью.
- Как публиковать проект на GitHub.

---

## Как это работает
Счетчик позволяет увеличивать или уменьшать число с помощью кнопок. Число меняет цвет в зависимости от значения: зелёный для положительных, красный для отрицательных. Кнопки имеют плавные анимации и эффект "волны" при клике.

---

## Технологии
- **React**: для создания интерфейса и логики.
- **CSS**: для стилизации (градиенты, тени, Flexbox).
- **Git/GitHub**: для управления версиями и публикации.

---

## Как повторить проект с нуля

### 1. Настройка окружения
1. Установите [Node.js](https://nodejs.org/) (если ещё не установлено).
2. Откройте терминал и создайте новый проект с помощью Vite:
   ```bash
   npm create vite@latest counter-app -- --template react
   cd counter-app
   npm install
