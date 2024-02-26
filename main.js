// POST 
// const postToAdd = [{
//         id: '22',
//         author: 'Pupkin',
//         content: 'Vasul Pupkin',
//     },
//     {
//         id: '23',
//         author: 'Petro',
//         content: 'Petro Pet',
//       }

// ];

// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(postToAdd),
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then(response => response.json())
//     .then(post => console.log('post POST',post))
//     .catch(error => console.log(error));

//     // GET 
const postId = 2;
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log('postId GET',post))
//   .catch(error => console.log(new Error(error)));

//   PATCH
// const postToUpdate = {
//     body: 'It is updated post',
//     content: 'It is updated post',
//     title: "Hello",
//     type: "beer"
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//   method: 'PATCH',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => response.json())
//   .then(post => console.log('postId PATCH',post))
//   .catch(error => console.log('ERROR' + error));

//   DELETE
// const postIdDelete = 2;
// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('postId DELETE','success'))
//   .catch(error => console.log('ERROR' + error));

// document.cookie = "user_name=Vasa Pupkin";  
// document.cookie = "user_age=25;secure";

// // Read (All)
// console.log( document.cookie );
// sessionStorage.setItem('key', Date());
// localStorage.setItem('localStorage', Date());
