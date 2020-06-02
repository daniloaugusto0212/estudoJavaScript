let num = [5, 2, 9, 3]

num[3] = 6 //adiciona o valor 6 na posição 3 do vetor

num.push(7) //adiciona o valor 7 na última posição

console.log(`O vetor tem ${num.length} posições`) //Mostra quantos elementos existem no vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort() //Organiza os elementos em order crescente
console.log(num)


for (let i = 0; i < num.length; i++) {
    const element = num[i];
    console.log(`O valor do vetora na posição ${i} é ${element}`)
    
}
//forma mais simplificada para percorrer um array
for (const key in num) {
    console.log(`O valor do vetora na posição ${key} é ${num[key]}`) 
    
}

console.log(num.indexOf(7)) //Mostra em que posição está o valor 7 dentro do vetor, Caso não exista, o valor retornado será -1

