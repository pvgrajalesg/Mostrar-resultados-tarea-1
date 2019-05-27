const { argv, calcularPromedio } = require('./src/datos');
const express = require('express')
const app = express()

if (argv._[0] = 'promedio') {
    texto = 'El promedio de ' + argv.n + ' es ' + calcularPromedio;
} else {
    texto = 'Promedio no calculado';
}

app.get('/', function (req, res) {
    res.send('<h1> Bienvenido </h1><br>'+ texto +'</br>')
})

app.listen(3000)

