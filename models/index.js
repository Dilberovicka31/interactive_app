const User = require('./User');
const Post = require('./Post');
// const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
// The User model can have many posts
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Post,
  Comment,
};
