var A = 5;
var B = 2;
var C = 5;

if (A < B + C) {
  if (A == B && B == C) {
    console.log("O triângulo é Equilátero!");
  } else if (A == B || A == C || B == C) {
    console.log("O triângulo é Isósceles!");
  } else {
    console.log("O triângulo é escaleno!");
  }
} else {
  console.log("Valores incorretos.");
}
