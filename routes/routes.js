const router = require('express').Router();

const { cardsRouter } = require('./cards');
const { usersRouter, userRout } = require('./users');

router.get('/cards', cardsRouter);
router.get('/users', usersRouter);
router.get('/users/:id', userRout);

router.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
router.post('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = router;
