function getName() {
    return 'Dennis J Carvalho'
}

function logFn(fn) {
    console.log(fn())
}

const logFnResult = logFn

logFnResult(getName)