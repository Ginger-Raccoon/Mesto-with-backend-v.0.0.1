const users = require('../data/users.json'); // импорт данных

const usersRouter =  (req, res) => {
  res.send(users)
};

const userRout = (req, res) => {
  const { id } = req.params;
  const result = users.find(({ _id }) => _id === id);
  if (!result) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  res.send(result);
  console.log(users)
};

module.exports = { usersRouter, userRout }; // экспорт роутера
