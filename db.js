const Sequelize = require('sequelize')

let db;
//console.log(process.env.DATABASE_URL);
// if (process.env.DATABASE_URL) {
//     db = new Sequelize(process.env.DATABASE_URL)
// } else {
db = new Sequelize({
        dialect: 'postgres',
        database: 'dbkj0pur22jl0t',
        username: 'lrmytorrczblnk',
        password: 'e97275656681a79e50d9676d9bf3f70bca0d8dfcd89970b435b5e76f9644bd00',
        host: 'ec2-3-208-224-152.compute-1.amazonaws.com'
    })
    //}

const Tasks = db.define('task', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    },
    priority: {
        type: Sequelize.DataTypes.ENUM('high', 'low', 'normal'),
        defaultValue: 'normal'
    }
})

module.exports = {
    db,
    Tasks
}