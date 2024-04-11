var num1;
var num2;
var num3;
var palavra;


num1 = parseInt(prompt("Informe o número 1"));
num2 = parseInt(prompt("Informe o número 2"));
num3 = parseInt(prompt("Informe o número 3"));

palavra = prompt("Digite uma palavra");
//palavra = palavra.toUpperCase();

function maior(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
alert(maior(num1, num2, num3));

function crescente(num1, num2, num3) {
    var vetor = [num1, num2, num3];
   return vetor.sort(function(a, b){return a - b});
}
alert(crescente(num1, num2, num3));

function palindromo(palavra) {
    palavra = palavra.toUpperCase().replaceAll(" ","");
    alert(palavra);
    palavra1 = palavra.split('').reverse().join('');
    alert(palavra1);
    return palavra == palavra1;
}
alert(palindromo(palavra));

function triangulo(num1, num2, num3) {
    if((Math.abs(num2 - num3) < num1) && (num1 < num2 + num3) && 
       (Math.abs(num1 - num3) < num2) && (num2 < num1 + num3) &&
       (Math.abs(num1 - num2) < num3) && (num3 < num1 + num2)) {

        if(num1 == num2 && num2 == num3) {
            return alert("Equilátero")
        } else if(num1 != num2 && num2 != num3 && num1 != num3) {
            return alert("Escaleno")
        } else {
            return alert("Isósceles")
        }
       } else {
        return alert("Não é um triângulo!")
       }
}
triangulo(num1, num2, num3)