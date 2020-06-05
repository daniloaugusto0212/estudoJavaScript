//Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantida de letras: ${textSize}`)

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log('\nArray com as posições separados pelo delimitador:', splittedText)

//Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text','txeT')
console.log('\nSubstituição de valor:', replaceText)

//Retorna uma "fatia" de uma valor
const lastChar = 'Texto'.slice(-1)
console.log('\nÚltima letra de uma string: ', lastChar)

const allWhithoutLastChar = 'Texto'.slice(0 -1)
console.log('\nValor da string da primeira letra menos a última:', allWhithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a última:', secondToEnd)

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2)
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos)