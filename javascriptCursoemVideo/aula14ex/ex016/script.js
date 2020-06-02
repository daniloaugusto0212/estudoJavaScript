function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'        
    }else{           
        passo = Number(passo.value)    
        inicio = Number(inicio.value)
        fim = Number(fim.value) 
        res.innerHTML = '<p>Contando: </p>'
        if (passo == 0) {
            alert('Passo inválido, considerando passo 1')
            passo = 1                
        }
        if (inicio < fim) {              
            for (var i = inicio; i <= fim; i+=passo ){
                res.innerHTML+=`${i} \u{1F449}`               
            }
            res.innerHTML += `\u{1F3C1}`
            
        }else{
            for (var i = inicio; i >= fim; i-=passo ){
                res.innerHTML+=`${i} \u{1F449}`               
            }
            res.innerHTML += `\u{1F3C1}`

        }
    }
    
}

