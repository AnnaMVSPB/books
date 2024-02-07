const express = require('express');
const { Book } = require('../../db/models');
const fileupload = require('../../utils/fileupload');
const BookCard = require('../../Components/Book');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      title, description, author, genreId,
    } = req.body;
    const file = req.files.url;
    if (title && description && file && author && genreId) {
      if (file.length) {
        const arrUrl = await Promise.all(
          file.map(async (el) => await fileupload(el)),
        );
      } else {
        const img = await fileupload(file);
        const book = await Book.create({
          title, description, img, author, genreId: +genreId, userId: res.locals.user.id,
        });
        const html = res.renderComponent(BookCard, { book }, { doctype: false });
        res.json({ html, message: 'ok' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.json({ message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Book.destroy({ where: { id, userId: res.locals.user.id } });
    if (data) {
      res.json({ message: 'ok' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
  }
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title, description, img, author, genreId,
  } = req.body;
  if (title && description && img && author && genreId) {
    const data = await Book.update({
      title, description, img, author, genreId,
    }, { where: { id, userId: res.locals.user.id } });
    res.json({ data });
  } else {
    res.json({ message: 'Заполните все поля' });
  }
});

module.exports = router;
