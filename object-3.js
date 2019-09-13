//Freeze() - faz com que os dados na sejam alterados
const newObj = { foo: 'bar' }
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log(`\nVariável newObj  após as alterações ${newObj}`)

//Seal() -> permite apenas a alaterção de propriedades existentes em um objeto
const person = { name: 'Dennis' }
Object.seal(person)

person.name = 'ADrian'
delete person.name
person.age = 26

console.log(`\nVariável person após as alterações = ${person}`)