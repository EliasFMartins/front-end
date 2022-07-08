const tecnologias=new Map()
tecnologias.set('react',{framework:false})
tecnologias.set('angular',{framework:true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chavesVariadas=new Map([
  [function() { },'função'],
  [{},'Objeto'],
  [{},'numero']
])
chavesVariadas.forEach((vlh,ch)=>{
  console.log(ch,vlh)
})
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123,'a')
console.log(chavesVariadas)
