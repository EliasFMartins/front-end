function cau(capitalInicial,taxaDeJuros,tempoDeAplicacao){
  return capitalInicial+(capitalInicial*taxaDeJuros*tempoDeAplicacao)
}
function cauc(capital,taxa,tempo){
  return capital*(taxa+1)**tempo
}
console.log(cau(100,10/100,12))
console.log(cauc(100,20/100,24))