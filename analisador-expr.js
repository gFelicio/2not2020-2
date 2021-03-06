const Stack = require('./lib/Stack')

let analisador = new Stack()

let expr = '6 + { 8 / [3 - (9 * 2)] + (4 * 3) }'

for (let i = 0; i < expr.length; i++) {
    switch (expr.charAt(i)) {
        case '{':
            analisador.push({pos: i, tipo: 'CH'})
            break
        case '[':
            analisador.push({pos: i, tipo: 'CO'})
            break
        case '(':
            analisador.push({pos: i, tipo: 'PA'})
            break
        case '}':
            info = analisador.pop()
            if (info && info.tipo == 'CH') {
                console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
            } else {
                console.log(`ERRO: chave fechando na posição ${i} não tem abertura correspondente.`)
            }
            break
        case ']':
            info = analisador.pop()
            if (info && info.tipo == 'CO') {
                console.log(`Colchete aberto na posição ${info.pos} e fechado na posição ${i}`)
            } else {
                console.log(`ERRO: colchete fechando na posição ${i} não tem abertura correspondente.`)
            }
            break
        case ')':
            info = analisador.pop()
            if (info && info.tipo == 'PA') {
                console.log(`Parêntese aberto na posição ${info.pos} e fechado na posição ${i}`)
            } else {
                console.log(`ERRO: parentêse fechando na posição ${i} não tem abertura correspondente.`)
            }
            break
    }
}

console.log(analisador)