//forEach
const arr = [1, 2, 3, 4, 5]

arr.forEach((value, index) => { console.log(`${index}: ${value}`) })

//pegando só os items
const num = [0, 1, 2, 3, 4, -1, -2, -3]
num.forEach(n => console.log(n))

//map()
console.log(num.map(value => value * 2))

let n = []
for (let i = 0; i < 11; i++) {
    n.push(i)
}
console.log(n.map(value => value * 2))

//flat()
/*
const idades = [20, 34, [35, 60[70, 40]]]
console.log(idades.flat())
*/

//flatMap()

const teste = [1, 2, 3, 4]
teste.flatMap(value => [value * 2])
teste.flatMap(value => [
    [value * 2]
])
console.log(teste)