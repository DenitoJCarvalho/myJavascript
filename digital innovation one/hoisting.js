//Hoisting de variável
function fn() {
    console.log(text)

    var text = 'Ejemplo'

    console.log(text)
}

console.log(fn());

//Nessa função ele ira retornar  undefined e depois exemplo

//Hoisting de função
function fn1() {
    log('Hoisting de função')

    function log(value) {
        console.log(value)
    }
}

fn1()