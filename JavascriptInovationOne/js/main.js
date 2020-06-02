//var nome = "Danilo"
//var n1 = 34
//var n2 = 10
//var frase = "Japão é a melhor seleção do mundo!"
//alert(nome + " tem " + idade + " anos")
//alert(idade+idade2)
//console.log(nome)
//console.log(n1 * n2)
//console.log(frase.replace("Japão", "Brasil"))
//alert(frase.replace("Japão", "Brasil"))
//console.log(frase.toUpperCase("Japão", "Brasil"))

//Listas
//var lista = ["maça","pera","laranja"]
//lista.push("uva")
//lista.pop()
//console.log(lista)
//console.log(lista.length)
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.toString()[0])
//console.log(lista.join(" - "))

//Dicionários
//var fruta = {nome: "maca", cor: "vermelha"}
//console.log(fruta.nome)
//console.log(fruta.cor)

//Lista de dicionários
//var frutas = [{nome: "maca", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
//console.log(frutas)
//console.log(frutas[1].nome)


//Condicionais
/*
var idade = prompt("Qual sua idade?")
if (idade >= 18) {
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/

//Laços de repetição
/*
var count = 0
while (count < 5) {
    console.log(count)
    count++
}
*/
/*
for (var count = 0; count <= 5; count++) {
    alert(count)    
}
*/

//var data = new Date()
//console.log(data)
//console.log(data.getMonth()+1)
//console.log(data.getMinutes())
//console.log(data.getFullYear())
//console.log(data.getDay())
//console.log(data.getDate())

//Funções
function soma(n1,n2){
    return n1 + n2
}

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar
    if (idade >= 18) {
        validar = true
    }else{
        validar = false
    }
    return validar
   
}

//var idade = prompt("Qual sua idade?")
//console.log(validaIdade(idade))

//alert(soma(5,10))
//alert(setReplace("Vai Japão",'Japão',"Brasil"))


function clicou(){
    //alert("Obrigado por clicar!")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    //console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    window.open("https://www.youtube.com/")
    //window.location.href="https://www.youtube.com/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}