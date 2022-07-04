const pilotos=['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()//massa quebrou o carro o metodo pop retira o ultimo elemento do array

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)//push adiciona o elemento na ultima posição do array

pilotos.shift()//remove o primeiro!!
console.log(pilotos)

pilotos.unshift('Hamilton')//e a mesma coisa o shift remove e o unshift coloca na primeira posição do array
console.log(pilotos)

//splice pode  add e remover elementos 

//adicionar elementos com splice
pilotos.splice(2,0,'Bottas','Massa')//primeiro adc , segundo remove os '' sao adicionados 2 como esrito apos o indice 2 
console.log(pilotos)
//remover
pilotos.splice(3,1)//massa quebrou d nv e.e no indice 3 vai remover 1 elemento 
console.log(pilotos)


const algunsPilotos1= pilotos.slice(2)//retorna um novo array
console.log(algunsPilotos1)//a partir do indice 2 ele copia os elementos 

const algunsPilotos2=pilotos.slice(1,4)
console.log(algunsPilotos2)