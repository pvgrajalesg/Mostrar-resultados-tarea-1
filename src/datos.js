let opciones = {
    nombre:{
        default:'Juan',
        alias:'n'
    },
    matematicas:{
        default:0,
        alias:'m'
    },

    ingles:{
        default:0,
        alias:'i'
    },

    programacion:{
        default:0,
        alias:'p'
    },


};

let argv = require('yargs')
        .command('promedio', 'Calcular el promedio', opciones)            
        .argv;

let calcularPromedio = (argv.m + argv.i + argv.p)/3;

module.exports = {
    argv,
    calcularPromedio
};