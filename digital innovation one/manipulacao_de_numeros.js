const num = 12.89589

//Transformando em string
const numAsString = num.toString()
console.log(`Número transformado em string ${numAsString}, tipo: ${typeof(numAsString)}`)

//Numero com duas casas decimais
const decimal = num.toFixed(2)
console.log(`\nNúmero com duas casas decimais ${decimal}, tipo: ${typeof(decimal)}`)

//Transformando em float
const numFloat = parseFloat(num)
console.log(`\nString parseada para float ${numFloat} tipo: ${typeof(numFloat)}`)

//Transformando em Integer
const numInt = parseInt(num)
console.log(`\nString parseada para integer ${numInt} tipo: ${typeof(numInt)}`)

//Usando a função Number()
const numText = '12.90'
const numAlt = Number(numText)

console.log(`\nConvetendo para número usando a função Number() ${numAlt} tipo: ${typeof(numAlt)}`)