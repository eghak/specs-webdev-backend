// Models is how you will be creating tables
// A model is going to represent all the data for a specific table in your database.

const db = require('./database')
const {DataTypes} = require('sequelize')

module.exports = {
    User: db.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, // not null
            primaryKey: true,
            autoIncrement: true // serial
        },
        username: DataTypes.STRING({length: 20}), // varchar(20)
        password: DataTypes.STRING({length: 100})
    })
}

