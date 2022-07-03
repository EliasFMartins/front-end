//usando a notação literal
const obj1={

}
console.log(obj1)
// Object em JS
console.log(typeof Object,typeof new Object)
const obj2= new Object
console.log(obj2)

// funções construtoras 
function Produto(nome,preco,desc) {
  this.nome = nome
  this.getPrecoComDesconto=()=>{
    return preco * (1-desc)
  }
}
const p1= new Produto('Caneta',7.99,0.15)
const p2=new Produto('Notebook', 2998.99,0.25)

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//função Factory
function criarFuncionario(nome,salarioBase,faltas){
  return{
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return(salarioBase/30)*(30-faltas)
    }
  }
}
const f1=criarFuncionario('João', 7980,4)
const f2=criarFuncionario('Andre', 8500,2)

console.log(f1.getSalario(),f2.getSalario())



//objetct.create
const filha=Object.create(null)
filha.nome='Ana'
console.log(filha)

// uma funçlão famosa que retorna Objeto...
const fromJSOM=JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSOM.info)