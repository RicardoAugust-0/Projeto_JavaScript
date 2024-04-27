let valores = [8, 64, 1512, 7, 3, 12, 8]

console.log(valores)

/* for (let pos = 0;pos < valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}