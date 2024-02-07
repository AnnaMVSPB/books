const express = require('express');
const { default: Err404 } = require('../../Components/err404');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send(res.renderComponent(Err404));
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
