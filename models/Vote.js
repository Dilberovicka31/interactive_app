// // models/vote.js
// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/connection.js');

// class Vote extends Model {}

// Vote.init(
//   {

//     // A vote can be either an upvote (1) or downvote (-1)
//     value: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         isIn: [[1, -1]],
//       },
//     },
//     // Add other vote-related fields as needed
   
//   },
//    {
//       sequelize,
//       freezeTableName: true,
//       underscored: true,
//       modelName: 'vote',
//     }
//   );

// module.exports = Vote;