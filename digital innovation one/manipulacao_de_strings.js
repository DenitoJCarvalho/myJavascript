//Retornará o tamanho de uma string
const tamanhoTexto = 'texto'.length
console.log(`A quantidade de letras é ${tamanhoTexto}\n`)

//Retornará um array quebrando a string por um delimitador
const divisaoTexto = 'Texto'.split('x')
console.log(`Array com as posições separadas pelo delimitador: ${divisaoTexto}`)

//Busca por um valor e subsitui por outro
const substituirText = 'Texto'.replace('Text', 'txeT')
console.log(`\nSubstituição de valor: ${substituirText}`)

//Retorna a fatia de um valor nessa caso a última letra
const fatiaTexto = 'Texto'.slice(-1)
console.log(`\nÚltima letra de uma string: ${fatiaTexto}`)

//Aqui retorna o texto depois de T
const fatiaTexto1 = 'Texto'.slice(1)
console.log(`\nÚltima letra de uma string: ${fatiaTexto1}`)

//Aqui retorna todas a letras antes do último o
const fatiaTexto2 = 'Texto'.slice(0, -1)
console.log(`\nÚltima letra de uma string: ${fatiaTexto2}`)

//Retorna n caracteres a partir de uma posição
const b = 'Texto'.substr(0, 3)
console.log(`\nAs duas primeiras letras são ${b}`)