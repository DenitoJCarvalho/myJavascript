//push() - adiciona um item no último elemento do array
const fruit = ['banana', 'manzana', 'aguacate']
fruit.push('piña', 'sandia', 'naranja')
console.log(fruit)

//pop() - remove o último elemento da lista array
fruit.pop('naranja')
console.log(fruit)

fruit.pop(4)
console.log(fruit)

//unshift
fruit.unshift('limón')
console.log(fruit)

//shift
fruit.shift()
console.log(fruit)

//concat
const meat = ['carne bovina', 'carne suina', 'carne de frango']
let fruitWithMeat = fruit.concat(meat)
console.log(fruitWithMeat)

//slice()
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]
console.log(numbers.slice(5))

console.log(numbers.splice(1))
console.log(numbers.splice(0, 1, 'first'))