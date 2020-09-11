/*
    Algoritmo de ordenação bubble sort

    estratégia:
    percorerer o vetor de dados, coparando elementos adjacentes
    e promovendo a troca quando o sucessor é maior que o antecessor

    o percurso no vetor é feito quantas vezes forem necessárias
    atpe que nehuma troca seja efetuada no loop
*/

function bubblesort(vetor) {
    let trocas
    let comparacoes = 0
    let totalTrocas = 0
    let passadas = 0

    do {
        passadas++
        trocas = 0
        // percurso do vetor até a penúltima posição
        // vetor.length - 2
        for (let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            if (vetor[i] > vetor[i + 1]) {
                // troca
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }
    } while (trocas > 0)

    console.log('PASSADAS', passadas, '\n', 'COMPARACOES', comparacoes, '\n', 'TROCAS', trocas, '\n', 'TOTAL TROCAS', totalTrocas, '\n')
}

// let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

// console.time('TESTE1')
// bubblesort(nums)
// console.timeEnd('TESTE1')

// console.log(nums)

// let empresas = require('./dados/15-mil-empresas')

// console.time('EMPRESAS')
// bubblesort(empresas)
// console.timeEnd('EMPRESAS')

// console.log(empresas)

let nomes = require('./dados/100-mil-nomes')

console.time('NOMES')
bubblesort(nomes)
console.timeEnd('NOMES')
