//função em JS é First-Class Object (Citizens)
//Higher-order function
// criar de forma literal
function fun1(){}

//Armazenar em uma variável
const fun2=function(){}
//Dessa forma a função e armazenada em uma constante ou variavel 

//Armazenar em um array[]
const array=[function(a,b){return a+b},fun1,fun2]
console.log(array[0](2,3))
//o array  chama o array e o [0] chama a function 0 nesse caso tem ate a function 2 

//Armazenar em um atributo de objeto
const obj={}
obj.falar=function(){return 'Opa'}
console.log(obj.falar())

//Passar function parametro pra outrao função
function run(fun){
  fun()
}
run(function(){console.log('Executando...')})

