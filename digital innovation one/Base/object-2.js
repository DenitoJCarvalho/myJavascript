let user = {
    name: 'Dennis',
    lastname: 'Jose de Carvalho'
}

//Recupera as chaves do objeto Ex: name, lastname
console.log(`Propriedades do objeto user: ${Object.keys(user)}`)

//Recupera os valores das chaves do objeto Ex: Dennis, José de Carvalho
console.log(`\nValores das propriedades do objeto user: ${Object.values(user)}`)

//Retorna um array de arrays contendo [nome_prop, ,valor_prop]
console.log(`\nLista de propriedades e valores: ${Object.entries(user)}`)

//Mergear proppriedades de objetos. O primeiro parâmetro é o objeto  e depois a propriedade
console.log(Object.assign(user, { fullName: 'Dennis José de Carvalho' }))
console.log(Object.assign({}, user, { name: 'Adrian', age: 1 }))