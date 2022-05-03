const newClient = new Clientes(); // criando uma caixinha com: nome, rg e cpf
// criando novo objeto

const newConta = new ContaCorrente(); // criando +1 caixinha com: agencia, conta, saldo e cliente (cliente também é outra caixinha)
newConta._cliente = newClient; // aqui a gente pega a caixinha cliente, e joga dentro da caixinha cliente, que fica dentro da ContaCorrente


console.log(newConta);

document.write("<br> Nome: "+newConta.ContaCliente.nome + "<br>");// o '.' referencia de onde vem a variavel
document.write("<br> Agência: "+ newConta.agencia + "<br>");
document.write("<br> Conta: "+ newConta.conta + "<br>");
document.write("<br> Saldo: R$", newConta.ContaSaldo + "<br>");
document.write("<br> Saldo depois do saque: R$", newConta.saq());
document.write("<br> Saldo depois do depósito: R$", newConta.dep());
document.write("<br> Saldo depois da transferência: R$", newConta.transf());