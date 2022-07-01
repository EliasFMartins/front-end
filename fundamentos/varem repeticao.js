// for(var i=0; i<20 ;i++){
//   console.log(i)
// }

const funcs=[]
for(let i=0; i<10 ;i++){
  funcs.push(function(){
      console.log(i)
  })
}
funcs[2]()
funcs[8]()