var age = 18

//condição simples
if (age > 18) {
    console.log(`Voto obrigatório!!!!`)
} else if (age >= 16 && age < 18 && age >= 60) {
    console.log(`Você tem {age} anos. Voto opcional!!!!`)
} else {
    console.log(`Você é menor. Não está habilitado para votar!!!`)
}