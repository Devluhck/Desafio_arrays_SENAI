/*
DESAFIO 3 

A empresa “SÓ CALCULO SEM PRECONCEITO” necessita agora de uma solução 
que alimente um vetor com 5 valores inteiros e também que solicite ao usuário a 
entrada de dados de um valor inteiro, após as devidas entradas de dados o programa 
deve multiplicar o valor informado pelo usuário por cada elemento do vetor sendo que 
o resultado deste cálculo deve ser armazenado em outro vetor, em suas respectivas 
posições. Como resultado deseja-se a impressão dos valores dos resultados dos 
cálculos, armazenados no segundo vetor.


*/

function validaproc() {

 
  let i;
  let vetorIncial = [];
  let valorInformado = 0;
  let novoValor = [];
  

  for(i = 0; i < 5; i++){

    vetorIncial[i] = parseInt(prompt(`Digite o ${i+1}º valor: `));
    console.log(`O valor digitado foi ${vetorIncial[i]}`);
    

  }

  console.log(`Vetor incial: ${vetorIncial}`);

  valorInformado = parseInt(prompt(`Digite algum valor`));

  for(i= 0; i < vetorIncial.length; i++){
    novoValor.push(vetorIncial[i] * valorInformado);
  }

  console.log(`O novo array ja com a multiplicação é ${novoValor}`)

 
  return false;

}