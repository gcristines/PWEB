var arr1 = [];

altura = parseFloat(prompt("Qual é sua altura?"));
peso = parseFloat(prompt("Qual é o seu peso?"));

arr1.push(altura);
arr1.push(peso);


function imc(arr1) {

    let altura = arr1[0];
    let peso = arr1[1];

    let imc = peso / Math.pow(altura, 2);
    imc = imc.toFixed(1);

    if (imc < 18.5) {
        return alert("Seu IMC é: " + imc + "\nClassificação: Magreza");
    } else if (imc > 18.5 && imc < 24.9) {
        return alert("Seu IMC é: " + imc + "\nClassificação: Normal");
    } else if (imc > 25.0 && imc < 29.9) {
        return alert("Seu IMC é: " + imc + "\nClassificação: Sobrepeso");
    } else if (imc > 30.0 && imc < 39.9) {
        return alert("Seu IMC é: " + imc + "\nClassificação: Obesidade");
    } else {
        return alert("Seu IMC é: " + imc + "\nClassificação: Obesidade grave");
    }
}
imc(arr1);
