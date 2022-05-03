//Uma classe pode ser considerada um molde
class Calculadora{
    //Atributo é uma variável metida
    valor1;
    valor2;
    _resultado; //O underline "_" na frente de um atrubito indica que ele é privado

    //criando um construtor;(os atributos são a mão de obra)
    //Metodo padrão de toda a classe
    //Metodo que é carregado toda vez que a classe é instanciada.
    constructor(){
        this.valor1 = prompt("Informe o primeiro valor: ") ;
        this.valor2 = prompt("Informe o segundo valor: ");
    }
    
    //Encapsulamento - Maneira de se manipular atributos privados fora da classe
    //Get - Pega o valor desse atributo
    get encapResult(){
        return this._resultado;
    }

    //Set - Altera o valor do atributo privado
    set encapResult(claytinho){
        this._resultado = claytinho;
    }
    
    //Metodo de soma
    //Método com parametros
    soma(){
        //let resultado = this.valor1 + this.valor2;
        // A soma pode ser entendido como fusão dos valorees, por conta do +. Por isso, coloca parseInt
        let resultado = parseInt(this.valor1) + parseInt(this.valor2);
        return resultado;
    }

    //Metodo de subtracao
    //Método sem parametro
    subtracao(){
        let resultado = this.valor1 - this.valor2;
        return resultado;
    }

    //Metodo de multiplicar
    multiplicar(){
        let resultado = this.valor1 * this.valor2;
        return resultado;
    }
    
    //Metodo de divisao
    divisao(){
        let resultado = this.valor1 / this.valor2;
        return resultado;
    }
}


