/*

DESAFIO 4 

A empresa “ORDEM DECRESCENTE” necessita de uma solução que alimente um 
vetor com 4 valores numéricos inteiros. Como resultado deseja-se que imprima os 
valores na ordem inversa com que foram armazenadas, ou seja, do valor localizado 
na última posição para o valor localizado na primeira posição do vetor

*/

function validaproc() {

 let vetorIncial = [];
 let vetorDecrescente = [];
 let contador = 0;

 alert("Empresa “ORDEM DECRESCENTE” ");

 for(let i = 0; i < 4; i ++){

  vetorIncial[i] = parseInt(prompt(`Digite o ${i+1}º valor: `));
  console.log(`Valor ${i+1}: ${vetorIncial[i]}`);
 }

  console.log(`Vetor original: ${vetorIncial}`);
  console.log(`Vetor em ordem decrescente: ${vetorIncial.reverse()}`); 

  return false;

}