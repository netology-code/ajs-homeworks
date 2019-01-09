# Домашнее задание к лекции «Рабочее окружение»

## Задача №1 - Создание package

### Легенда

Итак, вы решили организовать разработку игры с использованием правильных инструментов, а именно что проект нужно создавать с помощью `npm`, управлять зависимостями и сборкой тоже с его помощью. 

### Описание

Создайте проект на GitHub-проект, после чего с помощью `npm init` сгенерируйте package:
1. package name - defender-game
1. version - 1.0.0
1. description - "Browser based game"
1. entry point - index.js
1. test command - оставьте пустым
1. git repository - URL GitHub-проект репозитория 
1. keywords - game
1. author - ваше имя или псевдоним
1. license - ISC

Добавьте `.gitignore` из набора github: [https://github.com/github/gitignore/blob/master/Node.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore).

## Задача №2 - Dev-зависимости

### Легенда

Как вы уже видели, некоторые проекты требуют для своей работы совместимости со стандартом ES5. Но при этом есть большое желание использовать возможности ES6+. И для этого есть специальный инструмент, который позволяет осуществлять компиляцию кода на ES6+ в код на ES5 - [Babel](https://babeljs.io). Поэтому вы приняли следующее решение - писать всё на новейшей версии языка и с помощью Babel конвертировать всё в ES5, чтобы обеспечить себе наибольшее количество пользователей.

### Описание

Ваша задача подключить Babel к проекту и настроить сборку с его использованием.

Установите Babel.

Настройте скрипт запуска `build` для сборки с помощью `npm`. Для этого в секции `scripts` файла `package.json` пропишите:
```json
{
    ...
    "scripts": {
        ...
        "build": "babel src -d dist"
        ...
    }
}
```

Создайте конфиг `.babelrc` и пропишите `@babel/preset-env`

Создайте файл `src/app.js` со следующим содержимым:
```javascript
const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'маг', health: 0},
  {name: 'лучник', health: 0},
];

const alive = characters.filter(item => item.health > 0);
```

Удостоверьтесь, что проект собирается, если в консоли запустить команду `npm run build` и в каталоге `dist` формируется преобразованный Babel код.

Добавьте каталог `dist` в `.gitignore`.

## Задача №3 - ESLint

### Легенда

Очень важно следить за качеством кода в вашем проекте и следовать единым принципам кодирования в команде. В этом нам поможет ещё один инструмент - ESLint.

### Описание

Ваша задача «прикрутить» ESLint к проекту и настроить работу с его использованием.

Установка:
```shell
npm install --save-dev eslint
./node_modules/.bin/eslint --init
```

При инициализации конфиг файла выберите:
1. Use a popular style guide
1. Airbnb
1. React - No
1. Config format: json

Настройте скрипт запуска `lint` для `npm`. Для этого в секции `scripts` файла `package.json` пропишите:
```json
{
    ...
    "scripts": {
        ...
        "lint": "eslint src"
        ...
    }
}
```

Создайте файл `src/app.js` со следующим содержимым:
```javascript
const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'маг', health: 0},
  {name: 'лучник', health: 0}
];

const alive = characters.filter(item => item.health > 0);
```

Удостоверьтесь, что исправлены все ошибки проверки стиля.

---
В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылкы на ваш GitHub-проекты.