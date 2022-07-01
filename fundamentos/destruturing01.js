const pessoa ={
nome: 'Ana',
idade: 5,
endereco:{
  logadouro: 'Rua ABC',
  numero: 1000
}
}
const{ nome,idade}=pessoa
// // tire de dentro do Object a variavel nome e idade 
console.log(nome,idade)

const{ nome: n, idade: i}=pessoa
//dessa forma vc tira os dados do obejeto cria novas variaveis e atibue o valor dos dados do objetc as suas variaveis 
console.log(n,i)

const { sobrenome,bemHumorada=true} =pessoa
//vai pegar os dados  do objeto se n tiver vai atribur  oque vc colocar
// apos o igual
console.log(sobrenome,bemHumorada)
//sobrenome não foi definido , ja bemHumorada tbm estava definido mas tinha o =  dizendo q caso n tivesse nada receberia true 
const{ endereco:{logadouro,numero,cep}}=pessoa
// nesse caso vc coloca endereço pois os dados q vc quer , 
// estão dentro dele no object acima 
console.log(logadouro,numero,cep)