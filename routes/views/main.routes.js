const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.redirect('/genres');
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
