// function name() {
//     console.log("HELLO")
//     return "naa"
// }

// name()
// myFunc(mycar);

//     function myFunc(theObject) {
//     theObject.make = "Toyota";
//      }
  
//   const mycar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };
  
// console.log(mycar.make); // "Honda"
  
  
//   console.log(mycar)
// console.log(mycar.make); // "Toyota"

// FUNCTION EXPRESSIONS

// console.log(hello())

//  const hello =  function name() {
    
//     console.log("NAAA")

    
//  }



// console.log(multiply(12,1))
// function multiply(num1, num2) {
//    const result = num1 + num2
//    return result
// }


// function multiply(num1, num2) {
//    return num1
// }


// Calll BAck

function Hello(name, callMe) {
   console.log(name)
   callMe()
}

function callBack(num) {
   console.log(num,"HELLLOOO")
}

Hello("Affan",callBack,callBack(1))

