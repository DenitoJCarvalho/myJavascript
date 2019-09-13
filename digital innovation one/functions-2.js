this.name = 'Nome no contexto de criação'

const getNamearrowfn = () => this.name

function getName() {
    return this.name
}

const user = {
    name: 'Nome no objeto de execução',
    getNamearrowfn,
    getName
}

console.log(user.getNamearrowfn())
console.log(user.getName())