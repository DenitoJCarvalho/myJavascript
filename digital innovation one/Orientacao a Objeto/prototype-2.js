//Exemplo
'use strict'

function Animal(patas) {
    this.patas = patas
}

function Cachorro(morde) {
    Animal.call(this, 4)

    this.morde = morde
}

const pug = new Cachorro(false)

console.log(pug)