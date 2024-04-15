function carregar() {
    var msg = window.document.getElementById("msg")
    var imagem = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora <= 12) {
        // Bom dia!
        imagem.src = 'imagens/manhã.png'
        document.body.style.background = "#FDCA89"
    } else if (hora > 12 && hora <= 18) {
        //Boa tarde
        imagem.src = "imagens/tarde.png"
        document.body.style.background = "#FA530C"
    } else {
        //Boa noite
        imagem.src = "imagens/noite.png"
        document.body.style.background = "#1C8791"
    }
}