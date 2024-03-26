const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}
Vote.init (
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          type: {
            type: DataTypes.ENUM('upvote', 'downvote'),
            allowNull: false,
          },
        },
        {
          sequelize,
          modelName: 'vote',
          timestamps: true,
          updatedAt: false,
        }
      );
   
    


  


module.exports = Vote;
