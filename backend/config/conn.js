const db = require('mysql');

const connection = db.createConnection({
    host     : '149.90.127.61',
    database : 'tictactoe',
    user     : 'root',
    password : '',
})

module.exports = connection;