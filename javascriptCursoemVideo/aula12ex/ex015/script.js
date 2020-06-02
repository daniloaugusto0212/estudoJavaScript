function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')    
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 50) {
                //Idoso
                img.setAttribute('src', 'idosoM.png')
            }else if (idade > 25) {
                //Adulto
                img.setAttribute('src','adultoM.png')
            }else if (idade > 14) {
                //Adolescente
                img.setAttribute('src','adolesM.png')
            }else if (idade > 7) {
                //Criança
                img.setAttribute('src','criancaM.png')
            }else{
                //Bebe
                img.setAttribute('src', 'bebeM.png')
            }
        }else{
            genero = 'Mulher'
            if (idade > 50) {
                //Idoso
                img.setAttribute('src', 'idosoF.png')
            }else if (idade > 25) {
                //Adulto
                img.setAttribute('src','adultoF.png')
            }else if (idade > 14) {
                //Adolescente
                img.setAttribute('src','adolesF.png')
            }else if (idade > 7) {
                //Criança
                img.setAttribute('src','criancaF.png')
            }else{
                //Bebe
                img.setAttribute('src', 'bebeF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
    

}