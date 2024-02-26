//! Closure - замикання дає вам доступ до зовнішньої функції з внутрішньої функції
// function makeCounter() {
//     let count =0;
//     return function(){
//         return count++;
//     };
// }
// makeCounter(); //???????????????????????????????
// let counter = makeCounter();
// console.log('counter(x) :>> ', counter());

// console.log('counter(x) :>> ', counter());
// console.log('counter(x) :>> ', counter());
// console.log('counter(x) :>> ', counter());

// let x = 10;

// function foo() {
//   let y = 20; 
//   function bar() {
//     let z = 15; 
//     console.log( x + y + z);
//   }
//   return bar;
// }

// let test = foo();

// test(); // 45
// const counter = (function() {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: function() {
//       changeBy(1);
//     },

//     decrement: function() {
//       changeBy(-1);
//     },

//     value: function() {
//       return privateCounter;
//     }
//   };
// })();

// console.log(counter.value());  // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value());  // 2.

// counter.decrement();
// console.log(counter.value());  // 1.

//! this

// const obj1 = {
//     hello: function() {
//       console.log('1');
//       return this;
//     },
//     obj2: {
//         breed: 'dog',
//         speak: function(){
//               console.log('2');
//               return this;
//           }
//     }
// };
   
//   console.log('obj1',obj1);
//   console.log('obj1.hello()',obj1.hello());  
//   console.log('obj1.obj2',obj1.obj2);
//   console.log('obj1.obj2.speak()',obj1.obj2.speak()); 

// function test() {
//     'use strict';
//     return this;
//   }
  
//   console.log( test());

// const dog = {
//     breed: 'Beagles',
//     lovesToChase: 'rabbits'
//   };
  
//   function chase() {
//     console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.'); 
//   }
  
//   dog.foo = chase;
//   dog.foo();
  
//   chase();

//! call 
// const user = {
//     firstName: "Petro",
//     surname: "Pupkin",
// };
// const person = {
//     name: "Vasul",
//     serName: "Dovben",
//     name2: "Vasulovuch",
// };
  
// console.log('object :>> ', person.age?.age2);

//! function showFullName(firstPart, lastPart) {
//! console.log( this[firstPart] + " " + this[lastPart] );
//! }

// showFullName.call(user,'firstName','surname');
// showFullName.call(person,'name','serName');
// const bindVar = showFullName.bind(person);
// bindVar('name', 'name2')
// const num = [-1, 2, 3];
// console.log('object :>> ', Math.min.apply(null, num));

//! Currying
// function multiply(a) {
//     return (b) => {
//         return (c) => {
//             return a * b * c;
//         }
//     }
// }
// console.log(multiply(1)(2)(3))

// function discount(discount) {
//     return (price) => {
//         return price * discount;
//     }
// }
// const tenPercentDiscount = discount(0.1);
// console.log('tenPercentDiscount(500) :>> ', tenPercentDiscount(500));

//!  pure 
//!Any operation that is not directly related to the final output of the function is called a Side Effect
// let x = 2;
// const add = (x+y) => {
//     // let x = 2;
//  return x = x+y;
// };

// console.log('object :>> ', add(4,2));



//! fn.bind(this,args);

// const bindNew = function(fn, context) {
//     return function () {
//             return fn.apply(context,[...arguments])
//         }
// }

// const person = {
//     name: "Vasul",
//     surname: "Vasulovush",
//     secondInfo: 'men',
//     surname2:function(){
//         console.log(this.secondInfo)
//     },
// };
// person.surname2();
// function showFullName() {
//     console.log('arguments :>> ', arguments);
//     console.log('showFullName :>> ', this.name + ' ' + this.surname + ' '+ [...arguments]);
//     // console.log('firstPart ',firstPart);

// }
// // showFullName()
// const bindVar = bindNew(showFullName,person);


// bindVar('2','hjk');

// let x = 4;
// const sum = (num) => {
//     return num + x;
// }
// console.log('sum(2) :>> ', sum(2));
// console.log('x :>> ', x);