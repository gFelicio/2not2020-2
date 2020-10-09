let passadas = 0
let comparacoes = 0
let trocas = 0
function quickSort (vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    
    // console.log({vetor, inicio, fim})
    // garante que haja, pelo menos, DOIS ELEMENTOS para ordenar
    if (fim > inicio) {
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim

        for (let i = inicio; i < fim; i++) {
            comparacoes++
            if (fnComp(vetor[posPivot], vetor[i])) {
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }

        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++

        // lado esquerdo do pivot
        quickSort(vetor, fnComp, inicio, posDiv - 1)
        // lado direito do pivot
        quickSort(vetor, fnComp, posDiv + 1, fim)
    }
    
}

let nums = [54, 81, 72, 36, 9, 90, 63, 27, 18, 45]

// quickSort(nums)
// console.log(nums)
// console.log({passadas, comparacoes, trocas})

const nomes = require('./dados/candidatos-2018')
console.time('NOMES')
quickSort(nomes, (a, b) => {
    // ORdenação considerando primeiro o número do candidato
    // e DEPOIS o nome do candidato
    if (a.NR_CANDIDATO == b.NR_CANDIDATO) {
        if (a.NM_CANDIDATO > b.NM_CANDIDATO) return true
        else return false
    } else if (a.NR_CANDIDATO > b.NR_CANDIDATO) return true
    else return false
} )
console.timeEnd('NOMES')
// console.log('ARRAY DE NOMES', nomes)
console.log('Memória Usada (MB): ', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})