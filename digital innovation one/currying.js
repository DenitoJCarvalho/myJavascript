//Currying -  Técnica em transformar uma função com n parâmetrosem apenas uma  função que recebe um parâmetro

//Função simples
function soma(a, b) {
    return a + b
}

console.log(soma(2, 2))
console.log(soma(2, 3))
console.log(soma(2, 4))
console.log(soma(2, 5))

//Aplicando currying
function soma(a) {
    return function(b) {
        return a + b
    }
}
console.log('Aplicando currying')
const soma2 = soma(2)
console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))