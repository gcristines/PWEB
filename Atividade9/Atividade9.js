var altura;
var peso;

altura = parseFloat(prompt("Qual é sua altura?"));
peso = parseFloat(prompt("Informe seu peso."));

function imc(altura, peso) {

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
imc(altura, peso);
