const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
// The User model can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// The Post model belongs to the User model
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// The Vote model belongs to the User model
Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// The Vote model belongs to the Post model
Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// The User model can have many votes
User.hasMany(Vote, {
  foreignKey: 'user_id'
});

// The Post model can have many votes
Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

// The Comment model belongs to the User model
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// The Comment model belongs to the Post model
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// The User model can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// The Post model can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };