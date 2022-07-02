const notas=[7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem CallBack
let notasBaixas=[]
for (let i in notas){
  if(notas[i]<7){
 notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)

//com callBack
notasBaixas=notas.filter(function (nota){
  return nota<7
})

console.log(notasBaixas)
const notasbaixas2=notas.filter(nota=>nota<7)

console.log(notasBaixas)