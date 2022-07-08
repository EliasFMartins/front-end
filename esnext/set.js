//não aceita repetição e nao e indexado


const times=new Set()
times.add('vasco')
times.add('São Paulo').add('paumeiras').add('corinthias')
times.add('flamengo')
times.add('vasco')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))//has e usado pra testar se o elemento está ou não dentro do set


const nomes=['Raquel','James','Beatriz']
const nomesSet=new Set(nomes)
console.log(nomesSet)