const db = require('mysql');

const connection = db.createConnection({
    host     : 'localhost',
    database : 'tictactoe',
    user     : 'root',
    password : '',
})

module.exports = connection;