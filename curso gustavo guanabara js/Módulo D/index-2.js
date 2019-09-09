function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    if (fano.value.length === 0 || fano.value > ano) {
        let msg = '[ERRO]: Verifique de novo e tente novamente!'
        res.classList.add('erro')
        res.innerHTML = msg
            //alert('[ERRO]: Verifique de novo e tente novamente!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                //Bebe
                img.setAttribute('src', 'img/bebe-menino-2760338.jpg')
            } else if (idade >= 2 && idade < 12) {
                //Criança
                img.setAttribute('src', 'img/menino-crianca-1416736.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovem-menino-1253811.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/homem-adulto-220453.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-6110.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                //Bebe
                img.setAttribute('src', 'img/bebe-menina-266098.jpg')
            } else if (idade >= 2 && idade < 12) {
                //Criança
                img.setAttribute('src', 'img/menina-crianca-1462636.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovem-menina-756453.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/mulher-adulta-38554.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa-432722.jpg')
            }
        }
        let msg = 'OK!'
        res.getElementsByClassName.textAlign = 'center'
        res.classList.add('msg')
        res.innerHTML = `Genero: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}