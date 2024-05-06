function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

Retangulo.prototype.calcularArea = function () {
    return this.base * this.altura;
}

class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    get banco() {
        return this._banco;
    }

    set banco(nomeBanco) {
        this._banco = nomeBanco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(numero) {
        this._numeroConta = numero;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}

class ContaCorrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}

class ContaPoupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(valor) {
        this._juros = valor;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(data) {
        this._dataVencimento = data;
    }
}

function calcularAreaRetangulo() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var retangulo = new Retangulo(base, altura);

    var area = retangulo.calcularArea();
    document.getElementById("resultado").innerHTML = "Área do retângulo: " + area;
}

function criarContaCorrente() {
    var nomeCorrentista = prompt("Digite o nome do correntista:");
    var banco = prompt("Digite o nome do banco:");
    var numeroConta = prompt("Digite o número da conta:");
    var saldo = parseFloat(prompt("Digite o saldo da conta:"));
    var saldoEspecial = parseFloat(prompt("Digite o saldo especial da conta:"));

    var contaCorrente = new ContaCorrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial);

    mostrarDadosContaCorrente(contaCorrente);
}

function criarContaPoupanca() {
    var nomeCorrentista = prompt("Digite o nome do correntista:");
    var banco = prompt("Digite o nome do banco:");
    var numeroConta = prompt("Digite o número da conta:");
    var saldo = parseFloat(prompt("Digite o saldo da conta:"));
    var juros = parseFloat(prompt("Digite a taxa de juros da conta:"));
    var dataVencimento = prompt("Digite a data de vencimento da conta:");

    var contaPoupanca = new ContaPoupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento);

    mostrarDadosContaPoupanca(contaPoupanca);
}

function mostrarDadosContaCorrente(conta) {
    var dadosConta = "Nome do correntista: " + conta.nomeCorrentista + "<br>";
    dadosConta += "Banco: " + conta.banco + "<br>";
    dadosConta += "Número da conta: " + conta.numeroConta + "<br>";
    dadosConta += "Saldo: " + conta.saldo + "<br>";
    dadosConta += "Saldo Especial: " + conta.saldoEspecial + "<br>";

    document.getElementById("dadosContaCorrente").innerHTML = dadosConta;
}

function mostrarDadosContaPoupanca(conta) {
    var dadosConta = "Nome do correntista: " + conta.nomeCorrentista + "<br>";
    dadosConta += "Banco: " + conta.banco + "<br>";
    dadosConta += "Número da conta: " + conta.numeroConta + "<br>";
    dadosConta += "Saldo: " + conta.saldo + "<br>";
    dadosConta += "Taxa de Juros: " + conta.juros + "<br>";
    dadosConta += "Data de Vencimento: " + conta.dataVencimento + "<br>";

    document.getElementById("dadosContaPoupanca").innerHTML = dadosConta;
}
