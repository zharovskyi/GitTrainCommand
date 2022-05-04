// window.addEventListener('scroll', scrollOne);
// function scrollOne (event) {
//     console.log('scrollOne',event);
// }

// window.addEventListener('scroll', scrollTwo);
// function scrollTwo (event) {
//     console.log('scrollTwo',event)
// }

// window.addEventListener('scroll', scrollThree);
// function scrollThree (event) {
//     console.log('scrollThree',event)
// }
// //! Delete Necessary event  
// window.removeEventListener('scroll', scrollThree);
// const eventPrDef = document.getElementById('eventPrDef');

// //! event.preventDefault();
// eventPrDef.addEventListener('click', preventDef);
// function preventDef (event) {
//     event.preventDefault();
//     // event.stopPropagation();
//     console.log('preventDefault :>> ', event);
// }

// ! Cupturing
// const section = document.getElementById('section');
// const div = document.getElementById('div');
// const p = document.getElementById('p');

// section.addEventListener('click', handleClickSection)
// function handleClickSection (e) {
//     console.log('section:>> ', e);

// }

// div.addEventListener('click', handleClickDiv)
// function handleClickDiv (e) {
//     console.log('div :>> ', e);
// }

// p.addEventListener('click', handleClickP)
// function handleClickP (e) {
//     e.stopPropagation();
//     console.log('p :>> ', e);
// }







// [1,2,3,4].forEach(function (i) {
//     console.log('i :>> ', i);
// })

// // Asynchroniuses
// function asyncForEach (array,cb) {
//     array.forEach(function(){
//         setTimeout(cb,0);
//     })
// }

// asyncForEach([1,2,3,4],function(i) {
//     console.log('async i :>> ', i);
// })