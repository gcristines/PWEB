var nome;
var nota1;
var nota2;
var nota3;
var media;

nome = prompt("Qual é o seu nome?");

nota1 = parseFloat(prompt("Informe a nota 1"));
nota2 = parseFloat(prompt("Informe a nota 2"));
nota3 = parseFloat(prompt("Informe a nota 3"));

media = (nota1 + nota2 + nota3) / 3;

alert("A média d@ " + nome + " é: " + media.toFixed(2));

confirm("Legal!");