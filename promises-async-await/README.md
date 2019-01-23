# Домашнее задание к лекции «Promises, async/await»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

## Задача №1 - Promises

### Легенда

JavaScript живёт в асинхронном мире и большинство операций в нём так же выполняются асинхронно. Вы реализовали возможность экспорта сохранённого прогресса игры в виде JSON. Теперь нужно реализовать загрузку из файла.

### Описание

Для вас реализованы функция-заглушка и класс, которая эмулируют чтение файла. Ваша задача - реализовать класс `GameSavingLoader` с методом `load`, который загружает данные, парсит их с помощью вызова метода `json()` и создаёт объект типа `GameSaving`.

Код-заглушка:
```javascript
class GameSavingData {
  constructor(data) {
    this.data = data;
  }
  
  json() {
    return new Promise((resolve, reject) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(this.data)));
      }, 1000);
    });
  }
}

function readGameSaving() {
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
      return (input => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 5000); 
  });
}
```

Пример использования функции (если бы это был синхронный код)
```json
const data = readGameSaving(); // возвращается Promise!
const value = data.json(); // возвращается Promise!
```

Спецификации объектов класса GameSaving:
```json
{
  "id": <number>, // id сохранения
  "created": <timestamp>, // timestamp создания
  "userInfo": {
    "id": <number>, // user id
    "name": <string>, // user name
    "level": <number>, // user level
    "points": <number> // user points
  }
}
```

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете. Обратите внимание, что вы тестируете асинхронный код.

## Задача №2 - `async/await`

### Легенда

Вы устали от бесконечной цепочки `.then().then().catch()` и решили перейти на `async/await`.

### Описание

Перепишите предыдущую задачу с использованием `async/await`. Не забудьте про `try-catch` для отлова ошибок.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете. Обратите внимание, что вы тестируете асинхронный код.

## Задача №3 - Testing Async code

### Легенда

Асинхронный код - это здорово, но заглушки, которые были в предыдущих задачах всегда resolv'ятся, а в реальной жизни так бывает не всегда.

### Описание

Используя механизмы Jest, замокайте функции-заглушки и классы-заглушки так, чтобы у вас была возможность протестировать как `resolve`, так и `reject` на каждом этапе.

Должно обеспечиваться 100% покрытие функций и классов, которые вы тестируете. Обратите внимание, что вы тестируете асинхронный код.

---
В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.
