// Declarando objetos vazios
let pessoa1 = {};
let pessoa2 = new Object();

// Declarando objetos com propriedades
let pessoa3 = {
    nome: 'João Josepho',
    naturalidade: 'Franca/SP',
    "data de nascimento": '1997-11-03',
    'estudante_fatec': true
}

console.log('PESSOA 3 INTEIRA \n', pessoa3);

// Acessando propriedade do obj
console.log('\n PROPRIEDADE SOZINHA', pessoa3.nome);

console.log('\n PROPRIEDADE SOZINHA MUITAS PALAVRAS COM ESPAÇO', pessoa3['data de nascimento']);

// Acessando propriedades com colchetes sempre funciona
console.log('\n COLCHETE PALAVRA SOZINHA', pessoa3['nome']);

let atrib = 'nome';
console.log('\n', pessoa3[atrib]);

// Criando nova propriedade
pessoa3['registro de estrangeiro'] = 123123123;

console.log('\n', pessoa3);

// Deletando propriedades
delete pessoa3.estudante_fatec;

// Percorrendo propriedades de objetos
for (let prop in pessoa3) {
    console.log('\n FOR IN', prop );
}

// listando atributo e valor
for (let atrib in pessoa3) {
    console.log('Atributo: ', atrib, '; ', 'valor: ', pessoa3[atrib]);
}

for (let propr in pessoa3) {
    console.log(`Atributo: ${propr}; valor ${pessoa3[propr]}`);
}