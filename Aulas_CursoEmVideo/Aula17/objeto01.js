let amigo = {nome: "José",
 sexo: "M",
 peso: 67.8,
 engordar(p=0) {
    console.log('Você engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)