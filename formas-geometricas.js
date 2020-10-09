let retangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'R'
}

let triangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'T'
}

let elipse = {
    base: 2.5,
    altura: 4.5,
    tipo: 'E'
}

let tchonga = {
    gambi: 'arra',
    treco: 'trem',
    coisa: 'treco',
    tipo: 'T'
}

const area = forma => {
    switch (forma.tipo) {
        case 'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default:
            return null
    }
}

console.log('RET', area(retangulo))
console.log('TRI', area(triangulo))
console.log('ELI', area(elipse))
console.log('TCH', area(tchonga))