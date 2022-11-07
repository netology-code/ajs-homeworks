# Домашнее задание к лекции «Рабочее окружение»

**Важно.** Каждая задача выполняется в виде отдельного проекта с собственным репозиторием на GitHub.

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

---

## npm package

### Легенда

Вы решили организовать разработку игры с использованием правильных инструментов, то есть с помощью `npm` нужно создавать проект, управлять зависимостями и сборкой. 

### Описание

Создайте проект на GitHub-проект, после чего с помощью `npm init` сгенерируйте package:
- package name — defender-game;
- version — 1.0.0;
- description — "Browser based game";
- entry point — index.js;
- test command — оставьте пустым;
- git repository — URL вашего репозитория на GitHub;
- keywords — game;
- author — ваше имя или псевдоним;
- license — ISC.

Добавьте `.gitignore` из набора GitHub: [набора](https://github.com/github/gitignore/blob/master/Node.gitignore).

---

## Babel

### Легенда

Некоторые проекты требуют для своей работы совместимость с текущей поддерживаемой версией языка. Но хочется использовать новейшие возможности ES. Для этого есть специальный инструмент [Babel](https://babeljs.io), который позволяет осуществлять компиляцию кода на ES6+ в поддерживаемые на данный момент возможности. Поэтому вы приняли решение: писать всё на новейшей версии языка и с помощью Babel обеспечить себе наибольшее количество пользователей.

### Описание

Ваша задача — подключить Babel к проекту и настроить сборку с его использованием.

1. Установите Babel (`npm install --save-dev @babel/core @babel/cli @babel/preset-env`).
2. Установите CoreJS (`npm install core-js@3`).

3. Настройте скрипт запуска `build` для сборки с помощью `npm`. Для этого в секции `scripts` файла `package.json` пропишите:
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

4. Создайте конфиг `.babelrc` и пропишите `@babel/preset-env`:
```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ]
}
```

5. Создайте файл `src/app.js` с содержимым:
```javascript
const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'маг', health: 0},
  {name: 'лучник', health: 0},
];

const alive = characters.filter(item => item.health > 0);
```

6. Проверьте, что проект собирается, если в консоли запустить команду `npm run build`, и в каталоге `dist` формируется преобразованный Babel-код.

7. Добавьте каталог `dist` в `.gitignore`.

---

## ESLint * (задача со звёздочкой)

**Важно: это необязательная задача.**

### Легенда

Важно следить за качеством кода в вашем проекте и следовать единым принципам кодирования в команде. В этом вам поможет инструмент — ESLint.

### Описание

Ваша задача — «прикрутить» ESLint к проекту и настроить работу с его использованием.

Установка:
```shell
npm install --save-dev eslint
npx eslint --init
```

При инициализации конфиг-файла выберите те же опции, что указаны в лекции:
1. How would you like to use ESLint? *To check syntax, find problems, and enforce code style*.
2. What type of modules does your project use? *JavaScript modules (import/export)*.
3. Which framework does your project use? *None of this*.
4. Where does your code run? *Browser*.
5. How would you like to define a style for your project? *Use a popular style guide*.
6. Which style guide do you want to follow? *Airbnb*.
7. What format do you want your config file to be in? *JSON*.
8. Would you like to install them now with npm? *Y*.

Настройте скрипт запуска `lint` для `npm`. Для этого в секции `scripts` файла `package.json` пропишите:
```json
{
    ...
    "scripts": {
        ...
        "lint": "eslint ."
        ...
    }
}
```

Создайте файл `src/app.js` с содержимым:
```javascript
const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'маг', health: 0},
  {name: 'лучник', health: 0}
];

const alive = characters.filter(item => item.health > 0);
```

Содержимое `.eslintignore`:
```
dist
```

Содержимое `.eslintrc.json`:
```json
{
    "extends": "airbnb-base",
    "env": {
        "es6": true,
        "browser": true
    },
    "rules": {
        "no-restricted-syntax": [
            "error",
            "LabeledStatement",
            "WithStatement"
        ]
   }
}
```

Запустите ESLint и проверьте, что вам показываются ошибки стиля. Исправьте их, затем снова запустите ESLint и удостоверьтесь, что исправлены все ошибки проверки стиля.
