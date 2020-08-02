const express = require('express');

const router = require('./routes/routes'); // импорт роутера

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(`${__dirname}/public`)); // доступ к папке public

app.listen(PORT, () => {
// Если всё работает, консоль покажет, какой порт приложение слушает
// eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});

app.use(router);
