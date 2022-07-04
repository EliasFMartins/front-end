// cadeia de protótipos (prototype chain)
Object.prototype.attr0='0'
const avo={ Attr1:'A'}
const pai={__proto__:avo,Attr2:'B'}
const filho={__proto__:pai,Attr3:'C'}

console.log(filho.attr0,filho.Attr1,filho.Attr2,filho.Attr3)
