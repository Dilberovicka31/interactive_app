const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Vote = require('./Vote');

// create associations
// User associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
    });

User.hasMany(Vote, {
    foreignKey: 'user_id'
    });

// Post associations
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
    });

Post.hasMany(Vote, {
    foreignKey: 'post_id'
    });

// Comment associations
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
    });

Comment.hasMany(Vote, {
    foreignKey: 'comment_id'
    });

// Vote associations
Vote.belongsTo(User, {
  foreignKey: 'user_id',
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
    });

Vote.belongsTo(Comment, {
    foreignKey: 'comment_id'
    });

module.exports = { User, Post, Comment, Vote };