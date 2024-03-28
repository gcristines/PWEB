var numero1;
var numero2;
var resultado;

numero1 = parseFloat(prompt("Digite o número 1"));
numero2 = parseFloat(prompt("Digite o número 2"));

resultado = numero1 + numero2;
alert("O resultado da soma é: " + resultado.toFixed(2));

resultado = numero1 - numero2;
alert("O resultado da subtração é: " + resultado.toFixed(2));

resultado = numero1 * numero2;
alert("O resultado da multiplicação é: " + resultado.toFixed(2));

resultado = numero1 / numero2;
alert("O resultado da divisão é: " + resultado.toFixed(2));

resultado = numero1 % numero2;
alert("O resultado do resto da divisão do primeiro pelo segundo é: " + resultado.toFixed(2));

confirm("Legal!");