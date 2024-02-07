const router = require('express').Router();
const booksRouter = require('./views/books.routes');
const genreRouter = require('./views/genre.routes');
const mainRouter = require('./views/main.routes');
const errRouter = require('./views/err.routes');
const authRouter = require('./views/auth.routes');

const booksApiRouter = require('./api/booksApi.routes');
const authApiRouter = require('./api/authApi.routes');

router.use('/auth', authRouter);
router.use('/books', booksRouter);
router.use('/genres', genreRouter);
router.use('/', mainRouter);

router.use('/api/books', booksApiRouter);
router.use('/api/auth', authApiRouter);

router.use('*', errRouter);
module.exports = router;
