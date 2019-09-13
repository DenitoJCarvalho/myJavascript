//For, while, do while, for in
const num = ['one', 'two', 'three']

for (let index = 0; index < num.length; index++) {
    const el = num[index]
    console.log(`Elemento #${index}: ${el}`)
}

var n = 0
var x = 0

while (n < 3) {
    n++
    x += n
}
console.log('\n', x)

let i = 0
do {
    i += 1
    console.log('\n', i)
} while (i < 5)

//in e of
let arr = [3, 5, 7]
arr.foo = 'hello'

for (let i in arr) {
    console.log('\n', i)
}
console.log('---------')
for (let i of arr) {
    console.log(i)
}

//break e continue
console.log('=====================')
var index = 0
while (true) {
    index++
    if (index > 2) {
        break
    }
    console.log(index)
}
console.log('=====================')
const array = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < array.length; i++) {
    const el = array[i]

    if (el % 2 === 0) {
        continue
    }
    console.log(el)
}