let user = {
    name: 'Dennis'
}

//Alterando a propriedade de um objeto
user.name = 'Lívia'
console.log(`${user.name}\n`)
user['name'] = 'Jéssica'
console.log(`${user.name}\n`)

const prop = 'name'
console.log(`${prop}\n`)
user[prop] = 'Adrian'
console.log(`${user[prop]}\n`)


//Criando uma propriedade
user.lastname = 'Carvalho'
console.log(`${user.lastname}\n`)
console.log(`${user.name} ${user.lastname}`)
    //Deletando uma propriedade  
delete user.name