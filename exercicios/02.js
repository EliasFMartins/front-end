function triangulo(a,b,c){
  if (a==b && b==c ){
    console.log('Equilátero')
  
  }else if(a==b||b==c||c==a){
    console.log('Isósceles')
  }else{
    console.log('Escaleno')
  }
}
triangulo(2,1,3)