const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create out User model
class User extends Model {}

// defines table columns and configurations
User.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER, // use the special Sequelize DataTypes object provide what type of data it is
      allowNull: false, // equivalent of SQL's `NOT NULL` option
      primaryKey: true, // instruct that this is the Primary Key
      autoIncrement: true // turn on auto ancrement
    },
    // define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define an email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // there cannot ve any duplicate email values in this table
      validate: { // if allowNull is set to false, we can run the data through validators before creating the table data
        isEmail: true
      }
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { // password must be at least four characters long
        len: [4]
      }
    }
  },
  {
    // passes in the imported sequalize connection to the database
    sequelize,
    timestamps: false, // don't automatically create timestamp fields
    freezeTableName: true, // don't pluralize name of database table
    underscored: true, // use underscores instead of camel-casing
    modelName: 'user' // modelName stays lowercase in the database
  }
);

module.exports = User;