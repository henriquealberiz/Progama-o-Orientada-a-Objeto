class Clientes{
    
constructor(){ // método para construir atributos
    //atributos
    this.nome = prompt("Informe o seu nome: ");
    this.rg = prompt ("Informe seu RG:");
    this._cpf = prompt("Informe o seu cpf: ");//._ ->encapsulamento é tornar a informação única , que encaminha para algum lugar
    
}

get Cpf(){
    return this._cpf;
}
}