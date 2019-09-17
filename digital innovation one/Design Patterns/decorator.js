let loggedIn = false

function Autenticacao(fn) {
    return !!loggedIn && fn()
}

function sum(a, b) {
    return a + b
}

//No decorator ele só vai executar se estiver autenticado
console.log(Autenticacao(() => sum(2, 3)))
loggedIn = true
console.log(Autenticacao(() => sum(2, 3)))
loggedIn = false
console.log(Autenticacao(() => sum(2, 3)))