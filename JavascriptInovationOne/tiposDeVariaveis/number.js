const myNumber = 12.4032

//Transforma um número para string
const numberAsString = myNumber.toString()
console.log('Número transformado em string: ', numberAsString)

//Retorna número com um npumero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals)

//Transforma uma string em float
console.log('\nString tranformada em float: ', parseFloat('13.22'))

//Tranforma uma string em int
console.log('\nString tranformada em inteiro:', parseInt('13.20'))