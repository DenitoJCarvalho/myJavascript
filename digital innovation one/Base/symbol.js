const symbol1 = Symbol()
const symbol2 = Symbol()

//Simbolos são únicos
console.log(`Symbol1 é igual a Symbol2 ${symbol1 === symbol2}`)

//Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Dennis',
    [nameSymbol2]: 'Adrian',
    lastName: 'José de Carvalho'
}

console.log(user)

//Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nvalor da chave ${key}: ${user[key]}`)
    }
}

console.log(`\nPropriedades do objeto user ${Object.keys(user)}`)
console.log(`\nValores das propriedades do objeto user ${Object.values[user]}`)

//Exibir symbols de um objeto
console.log('\nSymbols reegistrados no objeto user: ', Object.getOwnPropertySymbols(user))

//Acessando todas as propriedades do objeto
console.log('\nTodas propriedades do objeto user: ', Reflect.ownKeys(user))

//Criam um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}

console.log('\n', directions)