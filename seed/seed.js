const {User, Post, Vote, Comment} = require('../models');
const sequelize = require('../config/connection');
const data = require('./data.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(data.users, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(data.posts, {
    returning: true,
  });

  for (const post of posts) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    await post.addUser(randomUser);
    await post.createVote({ value: Math.floor(Math.random() * 2) - 1, user_id: randomUser.id });
  }

  const comments = await Comment.bulkCreate(data.comments, {
    returning: true,
  });

  for (const comment of comments) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    await comment.addUser(randomUser);
  }

  process.exit(0);
}
