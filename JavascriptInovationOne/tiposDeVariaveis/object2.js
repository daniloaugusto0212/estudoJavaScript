const user = {
    name: 'Danilo',
    lastName: 'Augusto Pacheco'
}

//Recupera as chaves do objeto
console.log('Chaves do objeto user: ', Object.keys(user))

//Recupera os valores do objeto
console.log('\nValores do objeto user: ', Object.values(user))

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\Lista de propriedades e valores: ', Object.entries(user))

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Danilo Augusto Pacheco'})

console.log('\nAdiciona a propriedade fullName no objeto user', user)
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:34}))

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar'}
Object.freeze(newObj) //freeze não deixa o objeto ser alterado

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariável newObj após as alterações:', newObj)

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Danilo'}
Object.seal(person)

person.name = 'Danilo Augusto'
delete person.name
person.age = 34

console.log('\nVariável person após as alterações:', person)