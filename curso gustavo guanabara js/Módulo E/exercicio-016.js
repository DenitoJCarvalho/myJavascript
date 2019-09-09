//Exercícios

function contar() {
    let ini = document.querySelector('input#txti')
    let fin = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fin.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar`
            //window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \t\u{1F449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \t\u{1F449}`
            }
        }
        res.innerHTML += `\t\u{1F3C1}`
    }

    //console.log(`${ini.value}, ${fin.value}, ${passo.value}`)
}