# Documentation

## Run dev build

Just type in your terminal `npm start`  or  `yarn start`
This generates file out.dev.js

## Run prod build

Just type in your terminal `npm run prod`  or  `yarn run prod`
This generates file out.prod.js

## The essence of experiment

File ./src/module.js contains:
* class Rudder
* class Wheel
File ./src/index.js exports and use only class Wheel. With new version of babel all seems work as expected. class Rudden excluded from final build


# Документация

## Запуск сборки для разработки

В терминале введите  `npm start`  или  `yarn start`
Результат -  out.dev.js

## Запуск сборки для продакшена

В терминале введите `npm run prod`  или  `yarn run prod`
Результат -  out.prod.js

## Смысл эксперимента

Файл ./src/modules.js содержит:
* class Rudder
* class Wheel
Файл ./src/index.js содержит экспортирует в себя класс Wheel и это единственный класс из файла ./src/modules который попадает в итоговую сборку
