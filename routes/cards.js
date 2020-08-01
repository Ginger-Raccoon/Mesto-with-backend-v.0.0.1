const cards = require('../data/cards.json'); // импорт данных

const cardsRouter = (req, res) => {
  res.send(cards)
};

module.exports = { cardsRouter }; // экспорт роутера