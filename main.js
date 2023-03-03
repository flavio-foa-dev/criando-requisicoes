import api from './app/connection.js';

api().then((res) => createCard(res));

function createCard(card) {
  console.log(card);
}
