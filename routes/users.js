const fs = require('fs');
const path = require('path');

const users = path.join(__dirname, '../data/users.json'); // импорт данных // импорт данных

const usersRouter = (req, res) => {
  fs.promises.readFile(users, 'utf8')
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

const userRout = (req, res) => {
  const { id } = req.params;

  fs.promises.readFile(users, 'utf8')
    .then((data) => {
      const usersData = JSON.parse(data);
      // eslint-disable-next-line no-underscore-dangle
      const result = usersData.find((user) => user._id === id);
      console.log(data);
      if (!result) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(result);
    })
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

module.exports = { usersRouter, userRout }; // экспорт роутера
