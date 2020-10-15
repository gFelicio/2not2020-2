class FormaGeometrica {
    constructor (b, a, t) {
        if (isNaN(b) || b <= 0) {
            throw new Error('A base deve ser numérica e maior do que zero.')
        }

        if (isNaN(a) || a <= 0) {
            throw new Error ('A altura deve ser numérica e maior do que zero.')
        }

        if (['R','T','E'].indexOf(tipo) < 0) {
            throw new Error ('O tipo deve ser R, T ou E.')
        }
        this.base = b
        this.altura = a
        this.tipo = t
    }

    area () {
        switch (this.tipo) {
            case 'R':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI
            case default:
                return null
        }
    }
}

const retangulo = new FormaGeometrica(4, 6.5, 'R')
const triangulo = new FormaGeometrica(4, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')

console.log(retangulo.base)
console.log(triangulo.base)
console.log(elipse.base)