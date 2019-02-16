let sla = document.querySelector("input[id='sal']");//Pegando o valor informado
let btn = document.querySelector("button"); //selecionando o botão
let answer = document.querySelector("section"); //selecionando o campo resposta

//função que calculará o novo salário
function novoSalario(sla){
    let reaj = parseFloat(sla.value) * 0.12; //calculando o reajuste
    let nsla = parseFloat(sla.value) + parseFloat(reaj); //calculando o novo salário
    let result = parseFloat(nsla.toFixed(2)); //limitando em 2 casas decimais
    let nothing = 0;

    //Verifica se foi digitado algo caso contrário retornará 0
    if (Number.isNaN(parseFloat(sla.value))){
        result = nothing.toFixed(2);
    }

    return result;//retornando o novo salário
}

//adiconando evento de ação ao botão
btn.addEventListener("click", function(){
    answer.style.display = "flex";//tornando visível o campo respota
    let novoSal = novoSalario(sla);//chamando a funçao para calcular o novo salário

    answer.innerHTML = "Novo salário R$" + novoSal; //exibindo o novo salário no campo de resposta
    console.log(novoSal);//exibindo o novo salário no console

});