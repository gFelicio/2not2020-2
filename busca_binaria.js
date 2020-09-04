let comp = 0

function buscaBinaria (lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        let meio = Math.floor((fim + inicio) / 2)

        if (valorBusca === lista[meio]) {
            comp++
            return meio
        } else if (valorBusca < lista[meio]) {
            comp += 2
            fim = meio - 1
        } else {
            comp += 2
            inicio = meio + 1
        }
    }

    return -1
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('COMPARAÇÕES: ', comp)