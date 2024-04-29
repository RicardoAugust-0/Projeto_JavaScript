var num = parseInt(prompt("Coloque qual tabuada você quer: "))
var vezes = parseInt(prompt("Coloque até qual tabuada você quer repeti-lo: "))

for (let dez = 0; dez <= vezes; dez++ ) {
    document.writeln(`<p> ${num * dez} </p>`)
}