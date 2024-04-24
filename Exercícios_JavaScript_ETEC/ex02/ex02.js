/* Desenvolva  um  programa  que  leia  um  número  inteiro  e  exiba  o seu módulo.
O módulo de um número x é definido como:
X se X é maior ou igual a zero
X*(-1) se X é menor que zero
 */

var inteiro = parseInt(prompt(`Coloque um número inteiro!`))

if (inteiro >= 0) {
    alert(`Módulo maior ou igual a zero! Módulo: ${inteiro}`)
} else {
    alert(`Módulo menor que zero! Módulo: ${inteiro * (-1)}`)
}