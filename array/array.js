let aprovados=new Array('bia','Carlos','Ana')
console.log(aprovados)

aprovados['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]='Paulo'
aprovados.push('Abita')// e usando para colocar um dado no ultimo espaço do array 
console.log(aprovados.length)//length conta quantos  bagui tem no array

aprovados[9]='Rafael'
console.log(aprovados.length)
console.log(aprovados[8])===undefined
console.log(aprovados)

aprovados.sort()
console.log(aprovados)
aprovados=['Bia','Carlos','Ana']
aprovados.splice(1,2,'elemento1','elemento2')
//splice() pode ser usado tanto para subistituir quanto para apagar um elemento do array 

console.log(aprovados)
