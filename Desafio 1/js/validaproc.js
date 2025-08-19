/*
DESAFIO 1
Um professor do SENAI gostaria de uma aplicação que fizesse o cálculo da média de 
seus 5 (cinco) alunos no bimestre. Como o bimestre é composto por 2 (duas) notas, 
crie 2 (dois) vetores para armazenar cada uma das notas dos alunos. Depois, crie 
outro vetor com o resultado da média dos alunos, seguindo a seguinte fórmula:

Média da Nota[1] = (Nota do vetor A[1] + Nota do vetor B[1]) / 2

*/

function validaproc() {

  let i = 0;
  let notaUm = [];
  let notaDois = [];
  let mediaAlunos = [];
  let numAlunos = 5;

  for (i = 1; i <= 5; i++) {

    alert(" DIGITE A NOTA DO 1º BIMESTRE O ALUNO ")

    notaUm[i] = parseFloat(prompt(`Digite a nota`));
    console.log(`\nA primeira nota do aluno ${i} foi  ${notaUm[i]}`);

    alert(" DIGITE A NOTA DO 2º  BIMESTRE O ALUNO ");

    notaDois[i] = parseFloat(prompt(`Digite a nota`));
    console.log(`A segunda nota do aluno ${i} foi ${notaDois[i]}`);

    alert("PROXIMO ALUNO")
    console.log("PROXIMO ALUNO")
  }
  
  for (i = 1; i < numAlunos ; i++) {
    //Média da Nota[1] = (Nota do vetor A[1] + Nota do vetor B[1]) / 2
    mediaAlunos[i] = (notaUm[i] + notaDois[i]) / 2;
    console.log(`\nA media dos alunos ${i} foi  ${mediaAlunos[i]}`);
  }


  return false;

}