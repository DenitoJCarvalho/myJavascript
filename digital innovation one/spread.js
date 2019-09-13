var partes = ['hombro', 'rotulas']
var musica = ['cabeza', ...partes, 'e', 'pies']

console.log(`${partes}\n${musica}`)

function fn(x, y, z) {}
var args = [0, 1, 2]
fn(...args)
console.log(args)

//Operador in(dentro)
console.log(0 in args)

//instance of
var dia = new Date(2019, 10, 17)

if (dia instanceof Date) {
    console.log('Sim')
} else {
    console.log('Não')
}