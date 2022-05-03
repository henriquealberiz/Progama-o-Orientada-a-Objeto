class Salario {
    salario;
   

    resultado;

    aumento(){
       /*  if(i>=this.valor){
            i=this.valor*0.1;
           console.log(i) ;
        } */
        let porcentagem = (this.salario * 10) / 100;
        this.resultado = porcentagem + this.salario;
        console.log(this.resultado);

        //let usamos para por atributos dentro do metodo e o this, puxar atributos fora do metodo


    }
}


const aumentoSalario = new Salario();
aumentoSalario.salario = 1200;
console.log(aumentoSalario.aumento());
