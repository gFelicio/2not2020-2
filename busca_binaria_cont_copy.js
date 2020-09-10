let comp = 0

function buscaBinaria (lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {
    if (fim >= inicio) {
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        if (res == 0) {
            comp++
            return meio
        } else if (res < 0) {
            comp += 2
            // fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        } else { //res > 0
            comp += 2
            // inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
        }
    }

    return -1
}

function comparaNome(obj, valorBusca) {
    if (valorBusca === obj.first_name) {
        return 0
    } else if (valorBusca < obj.first_name) {
        return -1
    } else {
        return 1
    }
}

// let numeros = []
// for (let i = 0; i <= 1000; i++) {
//     numeros.push(i);
// }

// let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

// console.log(numeros.length, 'BUSCA BINARIA RECURSIVA', buscaBinaria(numeros, 44, (elPos, busca) => {
//     if (busca == elPos) return 0
//     else if (busca < elPos) return -1
//     else return 1
// }))

// process.exit(0)

let listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', comparaNome))
console.timeEnd('FAUSTO')
console.log('COMPARACOES', comp)

console.log('_------------_______------------')

comp = 0

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', (obj, busca) => {
    if (busca == obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}))

console.timeEnd('FAUSTO')
console.log('COMPARACOES', comp)