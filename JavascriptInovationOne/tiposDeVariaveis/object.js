let user = {
    name: 'Danilo'
}

//Alterando a propriedade de um objeto
console.log(user)
user.name = 'Outro nome 1'
console.log(user)
user['name'] = 'Outro nome 2'
console.log(user)
//As duas maneira acima são válidas

const prop = 'name'
user[prop] = 'Outro nome 3'
console.log(user)

//Criando uma propriedade
//user.lastName = 'Cabrini da Silva'

//Deletando uma propriedade
delete user.name
console.log(user)
