//pessoa-> 123->{...}
const pessoa={nome:'Joao'}
pessoa.nome='Pedro'
console.log(pessoa)
//pessoa->456->{...}
//pessoa={nome:'Ana'}
Object.freeze(pessoa)
//boto Objetct.freeze n da pra mexer mais nada ja era acabou tudo...
