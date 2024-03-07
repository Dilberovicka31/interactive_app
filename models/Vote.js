// models/vote.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Vote = sequelize.define('Vote', {
    // A vote can be either an upvote (1) or downvote (-1)
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[1, -1]],
      },
    },
    // Add other vote-related fields as needed
  });

  return Vote;
};
