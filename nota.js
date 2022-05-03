class Nota {
    nota1;
    nota2;
    nota3;
    nota4;

    media (){
        let media = (this.nota1+this.nota2+this.nota3+this.nota4)/4;
        if(media >=5){
        console.log("Aluno Aprovado");
        }else{
        console.log("Aluno Reprovado");    
        }
   
    }
   
}

const mostrarNota = new Nota();
mostrarNota.nota1= 4;
mostrarNota.nota2= 3 ;
mostrarNota.nota3= 2 ;
mostrarNota.nota4= 6  ;
console.log(mostrarNota.media());