
/*
a= 10,
    b=5,
soma = a+b
multiplicacao = a*b
console.log(soma);
console.log(multiplicacao);
*/

//uma classe pode ser considerada um molde

class Calculadora {
    valor1
    valor2
    //método= função ou comportamento do objeto
    //método soma
    soma(){}

    //método divisao
    divisao(){}

    //método multiplicacao
    multiplicacao(){}

    //método subtracao
    subtracao(){}

}   // sempre com letra maiuscula; atributo é uma variavel metida.
                                                                                                                  
//criando uma instância
const calculadoraDoBanco = new Calculadora () // new serve para reutilizar os moldes da classe anterior; const = constante = variavel.
calculadoraDoBanco.valor1= 25;
calculadoraDoBanco.valor2= 20;
calculadoraDoBanco.Soma = calculadoraDoBanco.valor1 + calculadoraDoBanco.valor2;

console.log(calculadoraDoBanco);

