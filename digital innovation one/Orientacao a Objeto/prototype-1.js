//Exemplo
'use strict'

function Pessoa(name) {
    this.name = name
}

const p = new Pessoa('Lívia')

console.log(p)
console.log('\n=====================\n')

function Animal() {
    this.patas = 4
}

const cachorro = new Animal()

console.log(cachorro.__proto__ === Animal.prototype)
console.log(Animal.__proto__ === Function.prototype)
console.log('\n=====================\n')
console.log(cachorro instanceof Animal)
console.log(cachorro instanceof Function)