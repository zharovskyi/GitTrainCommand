//! Macro Tasks
//!? macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
//? microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver
// setTimeout(function timeout() {
//     console.log('timeout');
// }, 0); //macro task queue, do after doing all microtask queue

// let p = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
// }); // creating promise do synchronously

// p.then(function(){
//     console.log('then.promise');
// }); // microtask queue
// console.log('end script');


//! /////////////////////////
// console.log('start');

// setTimeout(()=>console.log('setTimeout'));

// document.addEventListener("DOMContentLoaded", ()=>{
//     console.log('Event DOMContentLoaded')
// });

// console.log('end script');

//! /////////////////////////
// const checkRequestAnimationDiff = () => {
//     let prev;
//     function call() {
//         requestAnimationFrame((timestamp) => {
//             if (prev) {
//                 console.log(timestamp - prev); // 16.6ms
//             }
//             prev = timestamp;
//             call();
//         });
//     }
//     call();
// }
// checkRequestAnimationDiff();

//! PROMISE
// function asyncFunc() {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => resolve('DONE'), 100);
//     });
// }
// asyncFunc()
// .then(x => console.log('Result:',x));

// let promise = new Promise(function(resolve, reject) {
//     resolve('success');
// });
// promise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('finished!')); // "finished";

//! Methods Of Promise  


//! Promise.all
// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 3000);

// Promise.all([promiseA, promiseB])
//     .then(result => console.log(result)) //["promiseA", "promiseB"]
//     .catch(err => console.log(err));

//! Promise.any - 1 true

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 2000);

// Promise.any([promiseA, promiseB])
//     .then(result => console.log(result)) // "promiseA"
//     .catch(err => console.log(err));

//! Promise.race
//? Promise.race is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected
const makePromise = (text, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(text), delay);
    });
};
const makePromiseError = (text, delay) => {
    return new Promise((resolve, reject) => setTimeout(() => reject(text), delay));
};



const promiseD = makePromiseError('promiseD', 1000);
const promiseC = makePromiseError('promiseC', 1000);
const promiseB = makePromise('promiseB', 1000);
const promiseA = makePromise('promiseA', 1000);

Promise.race([ promiseA, promiseB, promiseD, promiseC])
    .then(result => console.log('result',result)) // 
    .catch(err => console.log('err',err));

// Promise.allSettled()

//! Macro and micro
// const promiseA = makePromise('promiseA', 1000);
// const promiseB = makePromise('promiseB', 1000);
// const promiseC = makePromise('promiseC', 1000);

// promiseB.then(res=>{
//     console.log('res :>> ', res);
// })
// promiseA.then(res=>{
//     console.log('res :>> ', res);
// })
// promiseC.then(res=>{
//     console.log('res :>> ', res);
// })