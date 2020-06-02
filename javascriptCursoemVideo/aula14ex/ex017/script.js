function tabuada() {
    var num = document.getElementById('num')
    var res = document.getElementById('tab')
    if (num.value.length == 0) {
        alert('Digite um número!')
    }else{
        res.innerHTML = ''
        for (var i = 0; i <= 10; i++) {            
            var resultado = Number(num.value*i)
            var option = document.createElement('option')
            var resposta = `${num.value} x ${i} = ${resultado}`
            var conteudo = document.createTextNode(resposta)
            
            res.innerHTML+=option.appendChild(conteudo)
            res.appendChild(option)

        }
    }
}