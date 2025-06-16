// window.addEventListener('scroll', scrollOne);
// function scrollOne (event) {
//     console.log('scrollOne',event);
// }
///test

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
const section = document.getElementById("section");
const div = document.getElementById("div");
const p = document.getElementById("p");

section.addEventListener('click', handleClickSection)
div.addEventListener('click', handleClickDiv)
p.addEventListener('click', handleClickP)

section.addEventListener(
  "click",
  (e) => {
    console.log("section cupture");
  },
  true
);
div.addEventListener(
  "click",
  (e) => {
    console.log("div cupture");
  },
  true
);
p.addEventListener(
  "click",
  (e) => {
    console.log("p cupture");
  },
  true
);

function handleClickSection(e) {
  console.log("section:>> ");
}

function handleClickDiv(e) {
  console.log("div :>> ");
}

function handleClickP(e) {
  // e.stopPropagation();
  console.log("p :>> ");
}
