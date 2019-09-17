function Pessoa(customerProperties) {
    if (!Pessoa.instance) {
        Pessoa.instance = this
    }

    return Pessoa.instance
}

const p = Pessoa.call({ name: 'Adrian' })
const p1 = Pessoa.call({ name: 'Amy' })

console.log(p)
console.log(p1)