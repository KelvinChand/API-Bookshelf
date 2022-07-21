const {
  addBookhandler,
  getAllBookshandler,
  getBookbyIdhandler,
  updateBookbyIdhandler,
  deleteBookbyIdhandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookhandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookshandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookbyIdhandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookbyIdhandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookbyIdhandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
