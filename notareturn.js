class Nota {
    nota1;
    nota2;
    nota3;
    nota4;

    media (){
        let media = (this.nota1+this.nota2+this.nota3+this.nota4)/4;
        if(media >=5){
            let msg = "Aluno Aprovado"; // substituindo o "console.log"
            return msg;
        }else{
            let msg = "Aluno Reprovado";
            return msg;;    
        }
   
    }
   
}

const mostrarNota = new Nota();
mostrarNota.nota1= 1;
mostrarNota.nota2= 1 ;
mostrarNota.nota3= 1 ;
mostrarNota.nota4= 1  ;

console.log(mostrarNota.media());