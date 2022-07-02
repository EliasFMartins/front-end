const valor ='Global'
function minhaFuncao(){
  console.log(valor)
}
function exe(){
  const valor='legal'
  minhaFuncao
}
exe()