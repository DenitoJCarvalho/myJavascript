import { reverse } from "dns"

const a = [1, 2, 3, 4, 5]

//keys
const arrKeys = a.keys()
console.log(arrKeys.next())

//values
/*const arrValues = a.values()
console.log(arrValues.next())
*/

//entries
const arrEntries = a.entries()
console.log(arrEntries.next())

//find
const achar = a.find(values => values > 2)
console.log(achar)

//findIndex
console.log(a.findIndex(values => values > 2))

//filtro
console.log(a.filter(value => value > 1))

//indexof
console.log(a.indexOf(3))

//lastIndexOf
console.log(a.lastIndexOf(2))

//inlcudes()
console.log(a.includes(2))

//some
console.log(a.some(value => value % 2 === 0))

//every
console.log(a.every(value => value % 3 === 0))

//sort
console.log(a.sort())

//reverse
/*const b = ['a', 'b', 'c', 'd', 'e', 'z']
const c = b.reverse()
console.log(c)*/

//Join
/*const b = [10, 20, 40, 50, 100]
console.log(b.join('-'))
*/

//reduce
/*const b = [10, 25, 50, 75, 100]
b.reduce((total, value) => total += value, 0)
*/