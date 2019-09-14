//Classes

'use strict'

//Criar classe
class Animal {
    //Método construtor
    constructor(patas) {
        //Propriedades da classe == variáveis
        this.patas = 0
    }

    movimentar() {}
}

//Herdando as propriedades da classe Animal
class Cachorro extends Animal {
    constructor(morde) {
        super()
        this.patas = 4
        this.morde = morde
    }

    latir() {
        console.log('Au! au!')
    }
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

console.log(pug)
console.log(pitbull)