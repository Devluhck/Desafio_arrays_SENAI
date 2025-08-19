/*
DESAFIO 2

Professor “Ludovico Volpato” está de volta e deseja uma solução que alimente um 
vetor com 10 valores inteiros e também que solicite ao usuário a entrada de dados de 
um valor inteiro qualquer
A solução deverá fazer uma busca do valor, informado pelo 
usuário, no vetor e imprima a posição em que este foi encontrado ou se não foi 
encontrado.

*/

function validaproc() {

  let vetor = [];
  let valorDigitado = 0;
  let i;
  let encontrou = false;

  for(i = 0; i <10; i++){

    vetor[i] = parseInt(prompt(`Digite o ${i+1}º valor para alimentar o array `));
    console.log(`O ${i+1}º valor digitado foi ${vetor[i]}`);
    console.log(`posição ${i}º do array`);
  }

  valorDigitado = parseInt(prompt("Digite um valor qualquer"));

  for(i = 0; i < vetor.length; i++){

    if (vetor[i] === valorDigitado) {
      console.log(`O valor  digitado foi ${valorDigitado} e se encontra na posição ${i} do array`);
      encontrou = true;
      break;
    }
  }
      if(!encontrou){
      console.log("Valor não encontrado no array");

    }
  
  return false;

}