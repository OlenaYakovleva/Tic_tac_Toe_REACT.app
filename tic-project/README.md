# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Завдання: Рефакторинг та розширення гри «Хрестики-Нулики»
Мета: поліпшити структуру коду, підвищити масштабованість інтерфейсу та розширити функціонал гри.

1. Рефакторинг компонентів
Компонент Cell
Винеси відображення однієї клітинки ігрового поля з Game.jsx у новий компонент Cell.jsx (або Cell.tsx при використанні TypeScript).

Приймає пропси: value, index, onClick, isWinnerCell.
Повертає JSX, що відповідає за одну клітинку.
Компонент GameButton
Створи універсальний компонент-кнопку для гри.

Використай його замість «Скинути гру» й інших ігрових кнопок у проєкті.
Приймає пропси: children, onClick, variant (primary/secondary), disabled.
2. Типізація пропсів
Якщо проект на JavaScript — додай PropTypes для усіх нових та існуючих компонентів (Game, Cell, GameButton, GameTitle, GameTurn тощо).
3. Таймер гри
Додай відлік часу у верхній частині інтерфейсу.
Таймер стартує при першому ході та зупиняється, коли гра завершується (перемога або нічия).
На кнопці «Скинути гру» таймер скидається.
4. Статистика гри
Створи простий модуль статистики (можна у LocalStorage):

Показник	Опис
X wins	к-сть перемог гравця X
O wins	к-сть перемог гравця O
Draws	к-сть нічиїх
Avg. duration	середній час однієї партії
Відображай статистику під полем гри.
Додай кнопку «Очистити статистику» (використай GameButton).
5. Критерії приймання
[ ] Компоненти Cell та GameButton винесені й використовуються у Game.jsx.
[ ] Усі пропси типізовані (PropTypes).
[ ] Таймер коректно працює, зупиняючись після завершення гри.
[ ] Статистика зберігається між перезавантаженнями сторінки та коректно оновлюється.