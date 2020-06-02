function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        msg.innerHTML += ' Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#e4b118'
    }else if (hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#d77f59'
    }else{
        msg.innerHTML += ' Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#23313c'
    }
}
