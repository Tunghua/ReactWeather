function add (a,b) {
  return a+b;
}

var addStatement = (a,b)=>{
  return a+b;
}

var addExpression = (a,b)=>a+b;

console.log(add(5,3));
console.log(add(7,0));
console.log(addStatement(5,5));
console.log(addExpression(6,6));
