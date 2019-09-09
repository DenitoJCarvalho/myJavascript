/* 
Em javascript os dias da semana funciona da seguite forma:
0 - dom, 1 - seg, 2 - ter, 3 - qua, 4 - qui, 5 - sex, 6 - sab*/
var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO]:  Dia inválido')

}