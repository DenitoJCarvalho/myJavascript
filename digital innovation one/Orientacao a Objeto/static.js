'use strict'

function Person() {}

Person.walk = function() {
    console.log('walking...')
}

console.log(Person.walk())


class Person1 {
    static walk() {
        console.log('walking...')
    }
}

console.log(Person1.walk())