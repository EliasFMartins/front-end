const contadorA=require('./instaciaunica')
const contadorB=require('./instaciaunica')

const contadorC=require('./instacianova')()
const contadorD=require('./instacianova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)
