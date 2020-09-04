let comp = 0

function buscaBinaria (lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        if (res == 0) {
            comp++
            return meio
        } else if (res < 0) {
            comp += 2
            fim = meio - 1
        } else { //res > 0
            comp += 2
            inicio = meio + 1
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