function Pessoa() {
    return {
        name: 'Dennis',
        lastname: 'Carvalho'
    }
}

//Quando não se usa o new é um Factory
const p = Pessoa()

console.log(p)

function Pessoa(customProperties) {
    return {
        name: 'Dennis',
        lastname: 'Carvalho',
        ...customProperties
    }
}

//Quando não se usa o new é um Factory
const p1 = Pessoa({ name: 'Custom Name', age: 30 })

console.log(p1)