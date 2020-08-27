// Criação de quatro vetores diferentes e de formas diferentes
// Vetores vazios
let vetor1 = [];
let vetor2 = Array();

// Vetores inicializados com algum elemento já inserido
let vetor3 = [2, 4, 6, 8, 10];
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio');

// Usando o vetor1 de exemplo
// PUSH = Coloca um elemento novo ao final do vetor
vetor1.push('laranja');
vetor1.push('limao');

// Checando os novos elementos no vetor
console.log('VETOR1', vetor1);

// UNSHIFT = Coloca um elemento novo no começo do vetor
vetor1.unshift('maçã');
vetor1.unshift('abacaxi');
console.log('VETOR UNSHIFT', vetor1);

// SPLICE = Coloca um elemento novo no vetor, de acordo com a posição informada
// splice(pos, del, elem)
// param pos = número inteiro, posição onde o elemento novo será inserido
// param del = quantos elementos do vetor serão deletados para inserir o novo elemento
// param elem = o elemento a ser inserido
vetor1.splice(2, 0, 'morango');
vetor1.splice(1, 0, 'jaca');
console.log('VETOR SPLICE', vetor1);

// POP = Tira o último elemento do vetor, deletando-o
// Neste caso a seguir, salvamos o último elemento do vetor em uma variável para ela não ser perdida 
let x1 = vetor1.pop();
console.log('PRIMEIRO POP', vetor1, x1);

// SHIFT = Tira o primeiro elemento do vetor, deletando-o
// No caso, salvamos o primeiro elemento em uma variável a parte para que não percamos essa informação
let x2 = vetor1.shift();
console.log('PRIMEIRO SHIFT', vetor1, x2);

// SPLICE = Pega o elemento na posição especificada e cria um novo vetor a partir dela
// splice(pos, qtt, elem)
// param pos = número inteiro, a posição onde vamos pegar no vetor
// param qtt = número inteiro, quantos outros elementos, além do inicial, você quer pegar
// param elem = elemento a ser colocado no local da sua extração (opcional)
// Essa função nos retorna um vetor novo com os elementos extraídos do vetor inicial
let x3 = vetor1.splice(2, 1);
console.log('PRIMEIRO SPLICE', vetor1, x3);

// SPLICE com três parâmetros
vetor1.splice(1, 1, 'pera');
console.log('POSIÇÃO SUBSTITUÍDA', vetor1);

// Colocando novos elementos no vetor1
vetor1.push('amora', 'jaboticaba', 'pêssego', 'uva', 'abacate');
console.log('COISA NOVA', vetor1);

// Percorrendo o meu vetor
// em um FOR para vetores, colocamos o limite como sendo um número a menos do que o tamanho real do vetor
for (let i = 0; i < vetor1.length; i++) {
    console.log('A FRUTA É', vetor1[i]);
}

for (let fruta of vetor1) {
    console.log('FOR FRUTA É', fruta);
}

vetor1.forEach(fruta => console.log('FOREACH ARROW: ', fruta));

vetor1.forEach(function (fruta) {
    console.log('FOREACH FUNCTION: ', fruta);
});