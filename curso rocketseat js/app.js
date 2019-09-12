const express = require('express') //Importando o modulo
const app = express() //INstanciando

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/exercicio-1.html")
})

//Abrindo o servidor
app.listen(9595, function() {
    console.log('Conectado')
})