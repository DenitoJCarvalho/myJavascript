//Formada recomendada, boas práticas
const arr1 = [1, 2, 3, 4.5, 'teste']
console.log(`Arrays: ${arr1}\ntipo: ${typeof(arr1)}`)

//Não recomendado
const arr2 = new Array(1, 3, 4, 7, -9, 'teste')
console.log(`Arrays: ${arr2}\ntipo: ${typeof(arr2)}`)

//Outras formas
const arr3 = Array.of('Adrian', 'Amy', 23, 54)
console.log(`Arrays: ${arr3}\ntipo: ${typeof(arr3)}`)

const arr4 = Array(5)
console.log(`Arrays: ${arr4}\ntipo: ${typeof(arr4)}`)