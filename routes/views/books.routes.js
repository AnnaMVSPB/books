const express = require('express');
const { Book, Genre } = require('../../db/models');
const BooksList = require('../../Components/BooksList');
const BookFormUpdate = require('../../Components/BookFormUpdate');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    const genres = await Genre.findAll();
    res.locals.alena = 'alena';
    const html = res.renderComponent(BooksList, { title: 'BooksList', books, genres });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});
router.get('/:idBook/formUpdate', async (req, res) => {
  const { idBook } = req.params;
  const genres = await Genre.findAll();
  const book = await Book.findOne({ where: { id: idBook } });
  const html = res.renderComponent(BookFormUpdate, { title: 'updateFom', genres, book });
  res.send(html);
});

module.exports = router;
