/* Escreva um programa que leia quatro notas escolares de um aluno e apresentar uma mensagem que o aluno foi aprovado se o valor da média escolar for maior ou igual a 7.
Se o valor da média for menor que 7, solicitar a nota do recuperação, somar com o valor da média e obter a nova média.
Se a nova média for maior ou igual a 7, apresentar uma mensagem informando que o aluno foi aprovado na recuperação.
Se o aluno não foi aprovado, apresentar uma mensagem informando esta condição.
Apresentar junto com as mensagens o valor da média do aluno. 
*/

var nota1 = parseInt(prompt("Coloque a primeira nota:"));
var nota2 = parseInt(prompt("Coloque a segunda nota:"));
var nota3 = parseInt(prompt("Coloque a terceira nota:"));
var nota4 = parseInt(prompt("Coloque a quarta nota:"));

var media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    alert(`O Aluno foi Aprovado! Média: ${media}`);
} else {
    alert("O aluno não teve nota suficiente, mas tem recuperação")
    var recuperacao = parseInt(prompt("Coloque a nota de recuperação:"));
    var mediaFinal = (media + recuperacao) / 2;
    if (mediaFinal >= 7) {
        alert(`O Aluno passou na Recuperação! Média Final: ${mediaFinal}`);
    } else {
        alert("O Aluno foi Reprovado!");
    }
}