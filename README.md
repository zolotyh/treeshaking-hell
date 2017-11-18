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

Prod
```
!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);console.log(Object(i.a)(10))},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(t){return t*t*t};!function(){function t(){babelHelpers.classCallCheck(this,t)}t.prototype.print=function(){console.log("Sit iusto quia amet fugiat non nihil enim. Blanditiis aperiam cum quo similique atque tempore aliquam aliquam dignissimos quaerat saepe cumque iste! Corrupti modi incidunt enim blanditiis id voluptatem modi.")}}()}]);

```

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
