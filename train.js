// const callback_BasedFunction = (arg1, arg2, callback) => {
//   setTimeout(() => {
//     const result = arg1 + arg2;
//     if (result % 2 !== 0) {
//       callback(null, result);
//     } else {
//       callback(new Error('Result is not odd!'), null);
//     }
//   }, 1000);
// }

// const promisifiedFunction = (arg1, arg2) => {

// }

// const test = () => {
//   promisifiedFunction(2, 3)
//   //console.log('Result',5)
//   promisifiedFunction(2, 4)
//    //console.log('Error','Result is not odd!')
// }

// test()

// function fetchDataFromAPI(url) {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(HTTP error! Status: ${response.status});
//       }
//       return response.json();
//     });
// }

// function fetchMultipleAPIs(apiUrls) {

// }

// const apiUrls = [
//   'https://jsonplaceholder.typicode.com/posts/4',
//   'https://jsonplaceholder.typicode.com/posts/5',
//   'https://jsonplaceholder.typicode.com/posts/6'
// ];

// fetchMultipleAPIs(apiUrls)
//   .then(results => {
//     console.log('Combined Results:', results);
//   })
//   .catch(error => {
//     console.log('Error:', error.message);
//   });

const celebration = {
  place: "caffee",
  cost: 100,
  getPlace() {
    console.log(`we meet at ${this.place}`);
  },
  getCost: () => {
    console.log(`the entrance fee is ${this.cost}`);
  },
};

const luxCelebration = {
  place: "restaurant",
  cost: "500",
};

// Test cases
celebration.getPlace(); // ??? caffee
celebration.getCost(celebration.place); // ??? undefined

celebration.getPlace.call(luxCelebration); // ???restaurant
celebration.getCost.call(luxCelebration); // ??? undefined

const { getPlace } = celebration;
getPlace(); // ???undefined
