const express = require('express');
const { Genre, Book } = require('../../db/models');
const Category = require('../../Components/Category');
const BooksList = require('../../Components/BooksList');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await Genre.findAll();
   
    const html = res.renderComponent(Category, { categories, title: 'Genre' });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});
// router.get('/', async (req, res) => {
//   try {
//     const categories = await Genre.findAll();

//     res.status(200).json({ categories });
//   } catch ({ message }) {
//     res.send(message);
//   }
// });

router.get('/:name/books', async (req, res) => {
  const { name } = req.params;
  const category = await Genre.findOne({ where: { name } });
  const genres = await Genre.findAll();
  const books = await Book.findAll({ where: { genreId: category.id } });
  const html = res.renderComponent(BooksList, { title: `Books ${name} category`, books, genres });
  res.send(html);
});

module.exports = router;
