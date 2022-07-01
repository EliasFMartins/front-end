const escola="cod3r"

console.log(escola.charAt(3))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
// pegou o codico do caracter 
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
// vai seguir da string 1 em diante 
console.log(escola.substring(0,3))
// vai da string0 ate a 3

console.log('Escola'.concat(escola).concat("!"))
// concatenação basica
console.log(escola.replace(3,'e'))
// vai subistituir o numero 3 pela letra e da const Escola

console.log('Ana,Maria,Pedro'.split(','))
// faz cada nome vira um arrei divididos pela virgula como escrito