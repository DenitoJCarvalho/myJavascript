var nome = document.querySelector('input#nome')
var btn = document.querySelector('button')
var res = document.querySelector('div.answer')
var listaNomes = []
btn.addEventListener('click', () => {
    listaNomes.push(nome.value)
    res.innerHTML = listaNomes
    console.log(listaNomes)
        //console.table(listaNomes)
})