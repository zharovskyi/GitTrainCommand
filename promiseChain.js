//! First
// function getUserData() {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("User name:", data.name);
//     })
//     .catch((error) => console.error("Error:", error));
// }

// async function getUserData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     if(response.ok){
//       const res = await response.json()
//       console.log('res :>> ', res);
//       return res
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getUserData();

//! Second .....

// function fetchPostsAndComments() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//       console.log("Posts received:", posts);
//       return fetch(
//         `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
//       );
//     })
//     .then((response) => response.json())
//     .then((comments) => {
//       console.log("Comments for first post:", comments);
//     })
//     .catch((error) => console.error("Error:", error));
// }

// async function fetchPostsAndComments() {
//   try {
//     const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const postsData = await posts.json();
//     const id = postsData[0].id;
//     const comments = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//     );
//     const commentsData = await comments.json();
//     console.log("commentsData :>> ", commentsData);
//     return commentsData;
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// }

// fetchPostsAndComments();

//! Third
// function delayedLog() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Users:", data);
//       return new Promise((resolve) => setTimeout(resolve, 1000));
//     })
//     .then(() => fetch("https://jsonplaceholder.typicode.com/posts"))
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Posts:", data);
//       return new Promise((resolve) => setTimeout(resolve, 1000));
//     })
//     .then(() => fetch("https://jsonplaceholder.typicode.com/comments"))
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Comments:", data);
//     })
//     .catch((error) => console.error("Error:", error));
// }

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function delayedLog() {
//   try {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users");
//     const usersData = await users.json();
//     console.log("usersData :>> ", usersData);

//     await delay(1000);

//     const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const postsData = await posts.json();
//     console.log("postsData :>> ", postsData);

//     await delay(1000);

//     const comments = await fetch(
//       "https://jsonplaceholder.typicode.com/comments"
//     );
//     const commentsData = await comments.json();
//     console.log("commentsData :>> ", commentsData);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// }

// delayedLog();

//! Error Handling 4

// function fetchWithErrorHandling() {
//   fetch("https://jsonplaceholder.typicode.com/invalidUrl")
//     .then((response) => {
//       if (!response.ok) throw new Error("Network response was not ok");
//       return response.json();
//     })
//     .then((data) => console.log("Data received:", data))
//     .catch((error) => console.error("Fetch error:", error));
// }

// async function fetchWithErrorHandling() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/invalidUrl");
//     if (res.ok) {
//       return res.json();
//     }
//     throw new Error("Response was not ok");
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// }

// fetchWithErrorHandling();

//! 5 sevral items
// function fetchMultipleUsers() {
//   for (let i = 1; i <= 5; i++) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(`User ${i}:`, data);
//       })
//       .catch((error) => console.error("Error fetching user:", error));
//   }
// }

// async function fetchMultipleUsers() {
//   try {
//     for (let i = 1; i <= 5; i++) {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${i}`
//       );
//       const resData = await res.json();
//       console.log("resData :>> ", resData);
//       // throw new Error("Response was not ok", error);
//     }
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// }

// fetchMultipleUsers();

//! 6 all
// function fetchAllUsers() {
//   const userPromises = [
//     fetch("https://jsonplaceholder.typicode.com/users/1"),
//     fetch("https://jsonplaceholder.typicode.com/users/2"),
//     fetch("https://jsonplaceholder.typicode.com/users/3")
//   ];

//   Promise.all(userPromises)
//     .then((responses) => Promise.all(responses.map((res) => res.json())))
//     .then((usersData) => {
//       console.log("All Users Data:", usersData);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// async function fetchAllUsers() {
//   try {
//     const userPromises = [
//       fetch("https://jsonplaceholder.typicode.com/users/1"),
//       fetch("https://jsonplaceholder.typicode.com/users/2"),
//       fetch("https://jsonplaceholder.typicode.com/users/3"),
//     ];
//     const response = await Promise.all(userPromises);
//     const res = await Promise.all(response.map((item) => item.json()));
//     console.log("res :>> ", res);
//   } catch (error) {
//     console.log("error :>> ", error);
//   }
// }
// fetchAllUsers();

//! 7 
//! 2

function delayedLog(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

// delayedLog("Hello after 1 second")
//   .then(() => delayedLog("Another message after 1 second"))
//   .then(() => delayedLog("Yet another message"));


async function delayedLogPr() {
  await delayedLog("Hello after 1 second");
  await delayedLog("Another message after 1 second");
  await delayedLog("Yet another message");

}

delayedLogPr();
