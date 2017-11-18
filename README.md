# Documentation
## Run dev build
Just type in your terminal `npm start`  or  `yarn start`
This generates file out.dev.js
## Run prod build
Just type in your terminal `npm run prod`  or  `yarn run prod`
This generates file out.prod.js

## The essence of experiment
File ./src/lib.js contains:
* 2 math functions   – cube(x) and square(x) 
* 1 class  – TestClass
index.js file exports and use only cube function().When you run level build (`yarn start`), then TestClass and square function will marked as deleted but when you run prod build (`yarn run build`), then prod build will contains TestClass but square function

# Документация
## Запуск сборки для разработки
В терминале введите  `npm start`  или  `yarn start`
Результат -  out.dev.js
## Запуск сборки для продакшена
В терминале введите `npm run prod`  или  `yarn run prod`
Результат -  out.prod.js

## The essence of experiment
Файл ./src/lib.js содержит:
* 2 математические фнукции  – cube(x) и square(x) 
* 1 класс  – TestClass
index.js экспортирует и использует только функцию cube (). Когда вы запускаете сборку для разработки (`yarn start`), тогда TestClass и square() будут помечены к удалению, но когда вы запустите сборку для продакшена (`yarn run prod`), из сборки удалится функция square но TestClass останется
