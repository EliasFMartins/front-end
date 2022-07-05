const produtos=[
  {nome:'Notebook',preco:5000, fragil:true},
  {nome:'Ipad pro',preco:8000,fragil:true},
  {nome:'Copo de vidro', preco:12.49, fragil:true},
  {nome:'Copo de Plástico',preco:18.99,fragil:false}
]
// console.log(produtos.filter(function(p){
  // return p.preco>2400
// }))

 const caro=produto=>produto.preco>=5000
 const frag=produto=>produto.fragil
console.log(produtos.filter(caro).filter(frag))