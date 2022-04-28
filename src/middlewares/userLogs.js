const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../userLogs.txt');
const log = fs.readFileSync(logPath, 'utf-8')

function userLogs(req, res, next){
    fs.appendFileSync(logPath, 'O usuário acessou a rota: ' + req.url + '\n');
    next()
}

module.exports = userLogs