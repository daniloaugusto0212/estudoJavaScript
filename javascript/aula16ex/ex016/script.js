let valores = []
var arr = document.getElementById('fin')
function add(){   
    arr.innerHTML = ''  
    var numero = document.getElementById('num')
    var res = document.getElementById('recebe')     
    function adicionar(n) {
        if (valores.indexOf(n) != -1 || n < 1 || n > 100 || n.length == 0 ) {
           alert('Valor inválido ou já encontrado na lista')
        }else{          
            var option = document.createElement('option')
            valores.push(n)
            option.text = `Valor ${n} adicionado`     
            res.appendChild(option)  
        }
        numero.value = ''  //Deixa o campo vazio após confirmar
        numero.focus() //Direciona o curso para o mesmo campo após confirmar       
    }
    
    adicionar(numero.value)
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }else{       
        var maior = valores[0]
        var menor = valores[0]
        var total = 0
        for (let i = 0; i < valores.length; i++) {
            if (valores[i] > maior) {
                maior = valores[i]           
            }
            if (valores[i] < menor) {
                menor = valores[i]
            }
            total += Number(valores[i])
        }
        media = total / valores.length    
        arr.innerHTML = `
            <br>Ao todo temos ${valores.length} números cadastrados.<br>
            <br>O maior valor informado foi ${maior}.<br>
            <br>O menor valor informado foi ${menor}.<br>
            <br>A soma de todos os valores é ${total}<br>
            <br>A média entre os valores digitados é ${media}.`
    }
} 





