Array.prototype.filter2=function(callback){
  const newArray=[]
  for (let i=0;i<this.length;i++){
    if (callback(this[i],i,this)){
      newArray.push(this[i])
    }
  }
  return newArray
}


const produtos=[
  {nome:'Notebook',preco:5000, fragil:true},
  {nome:'Ipad pro',preco:8000,fragil:true},
  {nome:'Copo de vidro', preco:12.49, fragil:true},
  {nome:'Copo de Plástico',preco:18.99,fragil:false}
]


 const caro=produto=>produto.preco>=5000
 const frag=produto=>produto.fragil
console.log(produtos.filter2(caro).filter2(frag))