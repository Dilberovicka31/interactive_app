const router = require('express').Router();
const userRoutes = require('./userController');
const postRoutes = require('./postController');
const commentRoutes = require('./commentController');
const voteRoutes = require('./voteController');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/votes', voteRoutes);

module.exports = router;
