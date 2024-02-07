const express = require('express');
const cookiesConfig = require('../../config/cookiesConfig');
const Registration = require('../../Components/Registration');
const Login = require('../../Components/Login');

const router = express.Router();

router.get('/registration', async (req, res) => {
  try {
    const html = res.renderComponent(Registration, { title: 'registration' });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});
router.get('/login', async (req, res) => {
  try {
    const html = res.renderComponent(Login, { title: 'login' });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});
router.get('/logout', async (req, res) => {
  try {
    res.locals.user = undefined;
    res
     .clearCookie(cookiesConfig.access)
     .clearCookie(cookiesConfig.refresh)
    .redirect('/auth/login');
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
