var nota1 = 3;
var nota2 = 3;
var nota3 = 10;
var nota4 = 8;

var recuperacao = 8;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
var media2 = (media + recuperacao) / 2;



if (media >= 7) {
    console.log(`O Aluno foi Aprovado! Média: ${media}`);
} else if (media2 >= 7) {
    console.log(`O Aluno passou na Recuperação!. Média: ${media2}`);
} else if (media < 7 || media2 < 7) {
    console.log("O Aluno foi Reprovado!");
};