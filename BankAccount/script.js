var res = document.querySelector('div#res')

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
} 

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
} 

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500){
            return "Operação negada"
        }

        this._saldo = this._saldo - valor;
    }
} 

const criaConta = () => {
    const minhaConta = new ContaCorrente(1, 234, true);
    
    res.style.textAlign = 'center'
    res.innerHTML = `Sua agencia é ${minhaConta.agencia} número ${minhaConta.numero} com cartão de crédito`
}

const verificaSaldo = () => {
    const minhaConta = new ContaCorrente;
    var saldoConta = minhaConta.saldo;
    res.style.textAlign = 'center'
    res.innerHTML = `Seu saldo é ${saldoConta}`
}

btnConta.addEventListener('click', criaConta);
btnSaldo.addEventListener('click', verificaSaldo);











