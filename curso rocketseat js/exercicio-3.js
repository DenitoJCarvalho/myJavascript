var nomes = ['Jéssica', 'Lívia', 'Dennis'] //lista de nomes
var ul = document.querySelector('ul') //selecionando a unidade de lista
var btn = document.querySelector('button')


btn.addEventListener('click', () => {
    for (nome of nomes) {
        var li = document.createElement('li') // criando a tag li
        var text = document.createTextNode(nome) //adicionando o item da lista de nomes 

        li.appendChild(text) //adicionando o texto a lista
        ul.appendChild(li) // adicionando a lista a unidaede de lista não ordenado
    }
})