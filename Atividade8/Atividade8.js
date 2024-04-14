var idade, vetorIdade = [];
var opiniao, vetorOpiniao = [];
var sexo, vetorSexo = [];
var pessoa = 0;

while (pessoa < 5) {

    idade = parseInt(prompt("Qual a sua idade?"));
    vetorIdade.push(idade);

    opiniao = parseInt(prompt("Sua opinião sobre o filme é: ÓTIMO = 4, BOM = 3, REGULAR = 2 ou PÉSSIMO = 1 ?"));
    vetorOpiniao.push(opiniao);

    sexo = prompt("Qual seu sexo? Informe F ou M.");
    vetorSexo.push(sexo);

    pessoa ++;

}

function mediaIdade(vetorIdade) {

    let somarIdade = 0;

    for (let i = 0; i < 5; i++) {
        somarIdade += vetorIdade[i];
    }

    return (somarIdade / pessoa);
}
alert("A média da idade das pessoas que responderam ao questionário é: " + mediaIdade(vetorIdade));


function maiorIdade(vetorIdade) {
   
    let maior = vetorIdade[0]; // Suponha que o primeiro elemento seja o maior

    for (let i = 1; i < 5; i++) {
        if (vetorIdade[i] > maior) {
            maior = vetorIdade[i]; // Se encontrarmos um número maior, atualizamos o valor de "maior"
        }
    }

    return maior;
}
alert("A idade da pessoa mais velha é: " + maiorIdade(vetorIdade));


function menorIdade(vetorIdade) {
   
    let menor = vetorIdade[0]; // Suponha que o primeiro elemento seja o menor

    for (let i = 1; i < 5; i++) {
        if (vetorIdade[i] < menor) {
            menor = vetorIdade[i]; // Se encontrarmos um número menor, atualizamos o valor de "menor"
        }
    }

    return menor;
}
alert("A idade da pessoa mais nova é: " + menorIdade(vetorIdade));


function filmePessimo(vetorOpiniao) {

    let contPessimo = 0;

    for (let i = 0; i < 5; i++) {
        if (vetorOpiniao[i] == 1) {
            contPessimo ++;
        }
    }
    return contPessimo;

}
alert("A quantidade de pessoas que responderam péssimo é: " + filmePessimo(vetorOpiniao));


function filmeOtimo(vetorOpiniao) {

    let contOtimo = 0;

    for (let i = 0; i < 5; i++) {
        if (vetorOpiniao[i] == 4) {
            contOtimo ++;
        }
    }
    return ((contOtimo / pessoa) * 100);
}
alert("A porcentagem de pessoas que responderam ótimo é: " + filmeOtimo(vetorOpiniao) + "%");


function filmeBom(vetorOpiniao) {

    let contBom = 0;

    for (let i = 0; i < 5; i++) {
        if (vetorOpiniao[i] == 3) {
            contBom ++;
        }
    }
    return ((contBom / pessoa) * 100);
}
alert("A porcentagem de pessoas que responderam bom é: " + filmeBom(vetorOpiniao) + "%");


function contMulher(vetorSexo) {

    let contMulher = 0;

    for (let i = 0; i < 5; i++) {
        if (vetorSexo[i] == 'F') {
            contMulher ++;
        }
    }
    return contMulher;
}
alert("O número de mulheres que responderam ao questionário é: " + contMulher(vetorSexo));


function contHomem(vetorSexo) {

    let contHomem = 0;

    for (let i = 0; i < 5; i++) {
        if (vetorSexo[i] == 'M') {
            contHomem ++;
        }
    }
    return contHomem;
}
alert("O número de homens que responderam ao questionário é: " + contHomem(vetorSexo));