// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(sum(2)(6)(1))

/*    Using arrow function   */

// const sum=(a)=>(b)=>(c)=>a+b+c

// console.log(sum(2)(6)(1)

// function performOperation(type) {
//     return function (a) {
//       return function (b) {
//         switch (type) {
//           case "add":
//             return a + b;
//           case "subtract":
//             return a - b;
//           case "multiply":
//             return a * b;
//           case "divide":
//             return a / b;
//           default:
//             return "Not Valid Operation";
//         }
//       };
//     };
//   }
  
//   console.log(performOperation("add")(5)(2));  
 
/*    Infinite Curry   */
  
function curry(a) {
  return function (b) {
    if (b !== undefined) {
      return curry(a + b);  
    }
    return a;  
  };
}

console.log(curry(2)(6)(5)());