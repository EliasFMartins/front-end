const porta =3003

const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const bancoDeDados=require('./bancoDeDados')

app.use(bodyparser.urlencoded({extended:true}))
app.get('/produtos',(req,res,next)=>{
  res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id',(req,res,next)=>{
  res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
  const produto=bancoDeDados.salvarProduto({
    nome:req.body.nome,
    preco:req.body.preco
  })
  res.send(produto)
})
// app.get('/produtos',(req,res,next)=>{
//   res.send({nome:'Notebook',preco:123.45})//converter para JSON
// })
app.listen(porta,()=>{
  console.log(`Servidor executando na porta ${porta}.`)
})
