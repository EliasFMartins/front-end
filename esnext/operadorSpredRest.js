//operador...rest(juntar)/spread(espalhar)
//usar res com parâmetro de função

//usar spread com objeto

const funcionario={nome:'Maria',salario:12348.99}
const clone ={ativo:true,...funcionario}
console.log(clone)

//usar spread com array
const grupoA=['Joao','Maria','Gloria']
const grupofinal=["Maria",...grupoA,'Rafaela']
console.log(grupofinal)