const pessoa={
  saudacao:'Bom dia',
  falar(){
    console.log(this.saudacao)
  }
}
pessoa.falar()
const falar=pessoa.falar
falar()//coflito  entre paradgmas:finional e OO

const falarDePessoa=pessoa.falar.bind(pessoa)
//o bind vai apontar para o objeto , caso vc tente usar a função falar
//que esta dentro da variavel pessoa vai dar erro se n houver o bind
falarDePessoa()