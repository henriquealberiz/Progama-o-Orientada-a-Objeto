class ContaCorrente{
   
    constructor(){
        this.agencia = prompt("Informe sua agencia: ");
        this.conta = prompt("Informe sua conta: ");
        this._saldo = 2000;
        this._cliente; // como ele é privado, precisamos utilizar o encapsulamento
        this.saque = prompt("Informe o valor do saque: R$");
        this.deposito = prompt("Informe o valor de depósito: R$");
        this.transferencia = prompt("Informe o valor de transferência: R$");
        this.salPosSaq;
        this.salPosDep;
        this.salPosTransf;
    }

    get ContaSaldo(){ // get só pega a informação e transmite
        return this._saldo;
    }//return libera o resultado para fora da função

    get ContaCliente(){
        return this._cliente; // fiz o get contacliente 
    }

    set ContaCliente(valor){  // fiz o set contacliente
        //set  ele edita a informação capturada
        this._cliente = valor;// fazendo uma passagem, para inserir um valor
    }
    
    saq(){
        this.salPosSaq = this._saldo - this.saque;
        return this.salPosSaq;
    }
    dep(){
        this.salPosDep = parseFloat(this.salPosSaq) + parseFloat(this.deposito);
        return this.salPosDep;
    }
    transf(){
        this.salPosTransf = this.salPosDep - this.transferencia;
        return this.salPosTransf;
    }
}