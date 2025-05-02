//! 1

// function fetchData() {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error:", error));
// }
// fetchData();

// async function fetchDataAsync() {
//   try {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const res = await responce.json();
//     console.log("res :>> ", res);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// }
// fetchDataAsync();

//! 2

// function delayedLog(message) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, 1000);
//   });
// }

// delayedLog("Hello after 1 second")
//   .then(() => delayedLog("Another message after 1 second"))
//   .then(() => delayedLog("Yet another message"));

// async function delayedLogAsync() {
//   await delayedLog("Hello after 1 second");
//   await delayedLog("Another message after 1 second");
//   await delayedLog("Yet another message");
// }

// delayedLogAsync();

//! 3

// function fetchUserData(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => response.json());
// }

// function fetchPostData(postId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then(response => response.json());
// }

// Promise.all([fetchUserData(1), fetchPostData(1)])
//   .then(([user, post]) => {
//       console.log('User:', user);
//       console.log('Post:', post);
//   })
//   .catch(error => console.error('Error:', error));

// async function fetchData() {
//   try {
//     const promise = [
//       fetch(`https://jsonplaceholder.typicode.com/users/${1}`),
//       fetch(`https://jsonplaceholder.typicode.com/posts/${1}`),
//     ];
//     const response = await Promise.all(promise);
//     const res = await Promise.all(response.map((item) => item.json()));

//     console.log("res :>> ", res);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// }
// fetchData();

//! 4

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function step1() {
//   return wait(500).then(() => {
//       console.log('Step 1');
//   });
// }

// function step2() {
//   return wait(1000).then(() => {
//       console.log('Step 2');
//   });
// }

// function step3() {
//   return wait(1500).then(() => {
//       console.log('Step 3');
//   });
// }

// // step1()
// //   .then(step2)
// //   .then(step3)
// //   .catch(error => console.error('Error:', error));
// async function step() {
//   wait(500)
//   await step1();
//   wait(1000)
//   await step2();
//   wait(1500)
//   await step3();
// }
// step();

//! 6
// function task1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task 1 completed");
//       resolve();
//     }, 2000);
//   });
// }

// // task1().then(() => {
// //   console.log('Task 1 finished');
// // });

// async function taskAs1() {
//   const res = await task1();
//   console.log('Task 1 finished');
// }
// taskAs1();

function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("time :>> ", ms), resolve();
    }, ms)
  );
}

async function taskAs1() {
  await delay(1000);
  // console.log('1000 :>> ', );
  await delay(2000);
  // console.log('1000 :>> ', );
  await delay(3000);
  // console.log('1000 :>> ', );
}
taskAs1();
setTimeout(console.log("setTimeout :>> "));
