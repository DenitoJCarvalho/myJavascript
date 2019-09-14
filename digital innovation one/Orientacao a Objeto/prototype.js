//Exemplo
'use strict'

const myText = String('Hello prototype!!')

console.log(myText.__proto__.split === String.prototype.split)
    //true
    //O proto  aponta para o prototype

function Animal() {
    this.patas = 4
}

const cachorro = new Animal()

console.log(`O cachoro tem ${cachorro.patas} patas`)
    //console.log(Animal.constructor)