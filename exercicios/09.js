function classificaAluno(nota){
  let notaCorrigida=arredondar(nota)
  if (notaCorrigida>=40){
    console.log(`aluno aprovado com a nota de ${notaCorrigida} `)
  }else{
    console.log(`aluno Reprovado com a nota de ${notaCorrigida} !`)
  }
}
function arredondar(nota){
  if(nota%5>2){
    return nota+(5-(nota%5))
  }else{
    return nota
  }
}
classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
