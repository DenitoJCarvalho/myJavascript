const { getName, setName } = require('./module')

console.log(getName()) //default
console.log(setName('Adrian')) //undefined
console.log(getName()) //Adrian