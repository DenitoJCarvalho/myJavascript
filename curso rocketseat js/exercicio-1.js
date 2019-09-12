var btn = document.querySelector('button')

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    let i;

    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

btn.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('square')
    document.body.appendChild(box)

    box.addEventListener('click', () => {
        document.body.removeChild(box)
    })

    box.addEventListener('mouseover', () => {
        getRandomColor(box)
    })
})