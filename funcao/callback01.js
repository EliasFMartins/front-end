const fabricantes=["Mercedes","Audi","BMW"]
function imprimir(nome,indice){
  console.log(`${indice+1}.${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes=>console.log(fabricantes))