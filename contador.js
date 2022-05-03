//crie um progra,a que solicite uma valor e conte de zero até 10
class Contador {
    valor;
    contar(){ // método
    for(let i= 0; i<=this.valor; i++){ //comando this serve para chamar o valor (atributo) para o método.
        //let é quando a variavel esta dentro método
        console.log(i);
        }
    
    }
}
// criando um novo mod para a classe = new
const queroContar = new Contador();
queroContar.valor = 40; // o "." é comando para inserir atributo.
console.log(queroContar.contar());