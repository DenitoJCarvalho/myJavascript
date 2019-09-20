const users = ['Dennis', 'Jessica', 'Adrian']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}

const persons = [{
        name: 'Dennis',
        age: 30,
        gender: gender.MAN
    },
    {
        name: 'Jessica',
        age: 26,
        gender: gender.WOMAN
    },
    {
        name: 'Adrian',
        age: 18,
        gender: gender.MAN
    }
]

//Retornando a quantidade de itens dentro de um array
console.log(`\nItems: ${persons.length}`)

//Verifica se é array
console.log(`\nA variável persons é um array?\nresultado: ${Array.isArray(persons)}`)

//Iterar os items de array
persons.forEach((person, index, arr) => { console.log(`\nNome: ${person.name}\nIndex: ${index}\n`, arr) })

//Filtrar uma array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log(`\nNova lista apenas com homens: \n`, mens)
const womans = persons.filter(person => person.gender === gender.WOMAN)
console.log(`\nNova lista apenas com mulheres: \n`, womans)

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introducción a Javascript'
    return person
})
console.log(`\nPessoas com a adição do curso: `, personsWithCourse)

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log(`\nSoma de idade das pessoas é `, totalAge)

//Juntando todas as operações
const totalEventAges = persons
    .filter(person => person.age & 2 === 0)
    .reduce((age, person) => {
        age += person.age
        return age
    }, 0)

console.log(`\nSoma de idades das pessoas que possuem idade par é `, totalEventAges)