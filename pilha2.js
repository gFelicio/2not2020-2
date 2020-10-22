const Stack = require('./lib/Stack')

let pilha = new Stack()

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for (let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

let inverso = ''
console.log('PILHA', pilha)

while (pilha.size() > 0) {
    inverso += pilha.pop()
}
console.log(inverso)

// console.log(pilha)

// pilha.push(9)
// pilha.push(-8)
// pilha.push(0)
// pilha.push(4)

// console.log(pilha)
// console.log('ultimo', pilha.peek())
// console.log('tamnho', pilha.size())

// let x = pilha.pop()

// console.log('x', x)
// console.log('ultim elemento', pilha.peek())
// console.log('tamanho', pilha.size())
