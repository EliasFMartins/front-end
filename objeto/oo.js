//Coleção dinânimca de pares chaves/valor
const produto= new Object
produto.nome='cadeira'
produto['marca do produto']='Generica'
produto.preco=220

console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro={
  modelo:'A4',
  valor:89000,
  propietario:{
    nome:'Raul',
    idade:42,
    endereco:{
      logadouro:'Rua ABC',
      numero:123
    }
  },
  condutores:[{
    nome:'Junior',
    idade:22
  },{
    nome:'Ana',
    idade:45
  }],
  calcularValorSeguro: function(){
    //...
  }
}
carro.propietario.endereco.numero=1000
carro['propietario']['endereco']['logadouro']='Av Gigante'
console.log(carro)


delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)