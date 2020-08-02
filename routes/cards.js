const fs = require('fs');
const path = require('path');

const cards = path.join(__dirname, '../data/cards.json'); // импорт данных

const cardsRouter = (req, res) => {
  fs.promises.readFile(cards, 'utf8')
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

module.exports = { cardsRouter }; // экспорт роутера
