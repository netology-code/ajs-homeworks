# Домашнее задание к лекции «Рабочее окружение»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## npm package

### Легенда

Итак, вы решили организовать разработку игры с использованием правильных инструментов, а именно что проект нужно создавать с помощью `npm`, управлять зависимостями и сборкой тоже с его помощью. 

### Описание

Создайте проект на GitHub-проект, после чего с помощью `npm init` сгенерируйте package:
1. package name - defender-game
1. version - 1.0.0
1. description - "Browser based game"
1. entry point - index.js
1. test command - оставьте пустым
1. git repository - URL вашего GitHub репозитория 
1. keywords - game
1. author - ваше имя или псевдоним
1. license - ISC

Добавьте `.gitignore`, который мы для вас [приготовили](../.gitignore).

---

## Babel

### Легенда

Как вы уже видели, некоторые проекты требуют для своей работы совместимости с текущей поддерживаемой версией языка. Но при этом есть большое желание использовать новейшие возможности ES. И для этого есть специальный инструмент, который позволяет осуществлять компиляцию кода на ES6+ в поддерживаемые на данный момент возможности - [Babel](https://babeljs.io). Поэтому вы приняли следующее решение: писать всё на новейшей версии языка и с помощью Babel обеспечить себе наибольшее количество пользователей.

### Описание

Ваша задача подключить Babel к проекту и настроить сборку с его использованием.

1. Установите Babel (`npm install --save-dev @babel/core @babel/cli @babel/preset-env`).
2. Установите CoreJS (`npm install core-js@3`).

2. Настройте скрипт запуска `build` для сборки с помощью `npm`. Для этого в секции `scripts` файла `package.json` пропишите:
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

3. Создайте конфиг `.babelrc` и пропишите `@babel/preset-env`:
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

4. Создайте файл `src/app.js` со следующим содержимым:
```javascript
const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'маг', health: 0},
  {name: 'лучник', health: 0},
];

const alive = characters.filter(item => item.health > 0);
```

5. Удостоверьтесь, что проект собирается, если в консоли запустить команду `npm run build`, и в каталоге `dist` формируется преобразованный Babel код.

6. Добавьте каталог `dist` в `.gitignore`.

---

## ESLint (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Очень важно следить за качеством кода в вашем проекте и следовать единым принципам кодирования в команде. В этом нам поможет ещё один инструмент - ESLint.

### Описание

Ваша задача «прикрутить» ESLint к проекту и настроить работу с его использованием.

Установка:
```shell
npm install --save-dev eslint
npx eslint --init
```


При инициализации конфиг-файла выберите те же опции, что указаны в лекции:
* How would you like to use ESLint? *To check syntax, find problems, and enforce code style*
* What type of modules does your project use? *JavaScript modules (import/export)*
* Which framework does your project use? *None of this*
* Where does your code run? *Browser*
* How would you like to define a style for your project? *Use a popular style guide*
* Which style guide do you want to follow? *Airbnb*
* What format do you want your config file to be in? *JSON*
* Would you like to install them now with npm? *Y*

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

Запустите ESLint и удостоверьтесь, что вам показываются ошибки стиля. Исправьте их, затем снова запустите ESLint и удостоверьтесь, что исправлены все ошибки проверки стиля.
