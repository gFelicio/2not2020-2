// expressão de função tradicional
let quadrado = function (n) {
    return n * n;
}

let quadrado2 = n => n * n;
console.log('6x6', quadrado(6));
console.log('6x6 arrow', quadrado2(6));

let randomico = function () {
    return Math.floor(Math.random() * 100);
}

for (let i = 0; i <= 15; i++) {
    console.log('RANDOMICO: ', randomico(), '\n');
}

let aleatorio = () => Math.floor(Math.random() * 100);

for (let i = 0; i <= 7; i++) {
    console.log('Aleatorio: ', aleatorio(), '\n');
}