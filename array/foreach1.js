const aprovados=['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice){
  console.log(`${indice+1})${nome}`)
})//sapoha e muito util pqpq o +1 e pq começa no zera e com+1 começa no 1

aprovados.forEach(nome=>console.log(nome))
//nessa forma escreviria apenas o nome na ordem do array


//a baixo outra forma de fazer !!
const exibirAprovados=aprovado=>console.log(aprovado)
aprovados.forEach(exibirAprovados)