const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
  Comment.init(
      
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          content: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
          },
          parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'comments',
              key: 'id',
            },
          },
        },
        {
          sequelize,
          modelName: 'comment',
          timestamps: true,
          updatedAt: false,
        }
        //associations
        

      );
      

 
module.exports = Comment;
