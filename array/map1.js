const nums=[1,2,3,4,5]

//map e um for com propósito
let resultado=nums.map(function(e){
  return e*2
})
console.log(resultado)
const soma10=e=>e+10
const triplo=e=>e*3
const paraDinheiro=e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
//o replace e pra subistituir o ponto pela virgula  e o tofixed e pra deixar apenas 2 casas descimais 
// apos a virgual e parsefloat convert string pra number float
resultado=nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
