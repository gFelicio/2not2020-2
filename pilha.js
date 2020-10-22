let pilha = []

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for (let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

let inverso = ''
console.log('PILHA', pilha)

while (pilha.length > 0) {
    inverso += pilha.pop()
}
console.log(inverso)