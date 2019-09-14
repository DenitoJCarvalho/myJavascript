'use strict'

class Person {
    //# Indica que o atributo é privado
    #
    name = ''

    constructor(initialName) {
        this.#name = initialName
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

console.log(p)
p.getName()
p.name

p.setName('Thiago')
p.getName()