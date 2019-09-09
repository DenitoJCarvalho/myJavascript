function carregar() {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/dia-677845.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde-161963.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/noite-127577.png'
        document.body.style.background = '#515154'
    }
}