let comparaComthis = function(param){
  console.log(this===param)
}
comparaComthis(global)

const obj={}
comparaComthis=comparaComthis.bind(obj)
comparaComthis(global)
comparaComthis(obj)

let comparaComHisArrow=param=>console.log(this===param)
comparaComHisArrow(global)
comparaComHisArrow(this)
comparaComHisArrow(module.exports)

comparaComHisArrow=comparaComHisArrow.bind(obj)
comparaComHisArrow(obj)