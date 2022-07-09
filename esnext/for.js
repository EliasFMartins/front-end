for (let letra of "cod3r"){
  console.log(letra)
}
const assunstosEcma=['map','Set','Promise']

for (let i in assunstosEcma){
  console.log(i)
}

for (let assunto of assunstosEcma){
  console.log(assunto)
}
const assuntosMap=new Map([
  ['Map',{abordado:true}],
  ['Set', {abordado:true}],
  ['Promise',{abordado:false}]
])

for (let assunto of assuntosMap){
  console.log(assunto)
}
for (let chave of assuntosMap.keys()){
  console.log(chave)

}
for 