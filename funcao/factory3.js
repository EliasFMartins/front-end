class pessoa{
  constructor(nome){
    this.nome = nome
  }


  falar(){
    console.log(`Meu Nome é ${this.nome}`)
  }  
}

const p1=new pessoa('João')
p1.falar()


const Criarpessoa=nome=>{
  return{
    falar:()=>console.log(`Meu Nome e ${nome}`)
  }
}
const p2 =Criarpessoa('Jão')
p2.falar()