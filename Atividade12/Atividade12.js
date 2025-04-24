/*1. Utilize uma função construtora para o Retângulo receber (x,y) ou seja, base e altura, 
com um método para calcular a área. Criar um objeto e executar o método que calcula a área. 
Não precisa utilizar get e set na função construtora.*/

var base;
var altura;

base = parseFloat(prompt("Entre com o valor da base: "));
altura = parseFloat(prompt("Entre com o valor da altura: "));

function Retangulo(base, altura) {
  
    this.base = base
    this.altura = altura
    //Usando função construtora this
    this.CalculaArea = function() {
        return this.base * this.altura;
    }
};

var objRet = new Retangulo(base, altura);
alert("A área do retângulo é: " + objRet.CalculaArea());



/*2. Crie uma Classe tipo Conta, com as propriedades nome correntista, banco, numero da conta e saldo. 
Crie utilizando herança duas novas classes: Corrente com Saldo Especial e Poupanca com Juros, Data Vencimento. 
Receber os dados via get e set. Criar um objeto de cada uma: Corrente e Poupanca e mostrar os seus dados.*/

class Conta {
    constructor() {
        this.nomeCorrentista;
        this.banco;
        this.numeroConta;
        this.saldo;
    }
    setNomeCorrentista(value) {
        this.nomeCorrentista = value;
    }
    getNomeCorrentista() {
        return this.nomeCorrentista;
    }
    setBanco(value) {
        this.banco = value;
    }
    getBanco() {
        return this.banco;
    }
    setNumeroConta(value) {
        this.numeroConta = value;
    }
    getNumeroConta() {
        return this.numeroConta;
    }
    setSaldo(value) {
        this.saldo = value;
    }
    getSaldo() {
        return this.saldo;
    }
}

//Herança 
class Corrente extends Conta {
    constructor() {
        super();
        this.dataVencimento;
    }
    setdataVencimento(value) {
        this.dataVencimento = value;
    }
    getdataVencimento() {
        return this.dataVencimento;
    }
}
var objContaCorrente = new Corrente();
objContaCorrente.setNomeCorrentista("Gisele");
objContaCorrente.setBanco("Nubank");
objContaCorrente.setNumeroConta(1010);
objContaCorrente.setSaldo(1000);
objContaCorrente.setdataVencimento("10/01/2010");
alert(`Nome correntista=${objContaCorrente.getNomeCorrentista()}
       Banco=${objContaCorrente.getBanco()}
       Número da conta=${objContaCorrente.getNumeroConta()}
       Saldo=${objContaCorrente.getSaldo()}
       Data vencimento=${objContaCorrente.getdataVencimento()}`);

//Herança 
class Poupanca extends Conta {
    constructor() {
        super();
        this.dataVencimento;
    }
    setdataVencimento(value) {
        this.dataVencimento = value;
    }
    getdataVencimento() {
        return this.dataVencimento;
    }
}
var objContaPoupanca = new Poupanca();
objContaPoupanca.setNomeCorrentista("Guilherme");
objContaPoupanca.setBanco("Neon");
objContaPoupanca.setNumeroConta(2020);
objContaPoupanca.setSaldo(2000);
objContaPoupanca.setdataVencimento("20/02/2020");
alert(`Nome correntista=${objContaPoupanca.getNomeCorrentista()}
       Banco=${objContaPoupanca.getBanco()}
       Número da conta=${objContaPoupanca.getNumeroConta()}
       Saldo=${objContaPoupanca.getSaldo()}
       Data vencimento=${objContaPoupanca.getdataVencimento()}`);