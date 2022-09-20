//! const flatten = (arr) => {
//     return arr.reduce((newArr,item) => {
//         if(Array.isArray(item)) {
//            newArr = [...newArr,...flatten(item)];
//         }else {
//             newArr = [...newArr,item]
//         }
//         return newArr;
//     },[])
// }
// console.log('flatten:>> ', flatten([1, [1, 2, [3, [4]]], [2, 4]]));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// func({a: 1, b: 2, c:3 })
// const obj = { a: 1, b: 2, c: 3 };
// const func = ({ a, ...b }) => {
//   console.log(b);
// };

// function moveZeros(arr) {
//   const zeroArr = arr.filter(item=>item===0)
//   const nozeroArr = arr.filter(item=>item!==0)
//   return [...nozeroArr,...zeroArr]
// }
// console.log("moveZeros ", moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// const userRoles = ["user", "admin", "qa", "test", "QWE"];

// const users = [
//   {
//     id: 101,
//     name: "User Name 1",
//     role: "user",
//   },
//   {
//     id: 102,
//     name: "User Name 2",
//     role: "user",
//   },
//   {
//     id: 103,
//     name: "Admin Name 1",
//     role: "admin",
//   },
//   {
//     id: 104,
//     name: "QA Name 1",
//     role: "qa",
//   },
// ];

// const rolesCounter = (usersArray, userRolesArray) => {
//   const newObject = userRolesArray.reduce((newObject, role) => {
//     newObject[role] = 0;
//     return newObject;
//   }, {});

//   return usersArray.reduce((newObject, { role }) => {
//     newObject[role] += 1;

//     return newObject;
//   }, newObject);
// };

// console.log(rolesCounter(users, userRoles));

// {user: 2, admin: 1, qa: 1, test: 0}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! Copy of objects, use only for primitive
// import lodash from "lodash";
// lodash.deepClone
// const user = {
//   name: "John",
//   age: 30,
//   date: new Date(),
//   salary: "500$",
//   hobby: {
//     team: "Dynamo",
//     // goal: () => 5,
//   },
// };

//! Object assign
// const cloneOfUser = Object.assign({}, user); // no deep
// const cloneOfUser = JSON.parse(JSON.stringify(user)); //deep,but issuse with data
// const cloneOfUser = { ...user }; // no deep
// const cloneOfUser = deepClone(user);
// function deepClone(obj) {
//   const result = {};
//   for (let key in obj) {
//     // console.log("key :>> ", typeof obj[key]);
//     if (typeof obj[key] === "object") {
//       result[key] = deepClone(obj[key]);
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
// const cloneOfUser = structuredClone(user);
// cloneOfUser.name = "Vorskla";
// cloneOfUser.hobby.team = "Vorskla";
// cloneOfUser.hobby.goal = function test() {
//   return "1";
// };

// console.log("user :>> ", user);
// console.log("cloneOfUser :>> ", cloneOfUser);

// console.log("cloneOfUser :>> ", cloneOfUser === user);
// console.log("user :>> ", user.hobby.goal());
// console.log("cloneOfUser ", cloneOfUser.hobby.goal());

// console.log('cloneOfUser :>> ', cloneOfUser.hobby.goal());
// console.log('cloneOfUser :>> ', cloneOfUser);

//!!! hasOwnProperty
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// for (key in rabbit) {
//   console.log('key rabbit:>> ', key);
// }
// console.log("hasOwnProperty", rabbit.hasOwnProperty("eats"));
// console.log("hasOwnProperty", rabbit.hasOwnProperty("jumps"));

// ! this
// Контекст усередині стрілки визначається місцем її оголошення,
// а не виклику та посилається на контекст батьківської функції
// бо не має свого this

// let f = {
//   test: function () {
//     console.log(this);
//   },
// };
// f.test();
// let a = {
//   test: () =>{
//     console.log(this);
//   },
// };
// a.test();

// !!!!!!!!!!!!!!!!!!!!!!!

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };
// Під час виклику fn callback буде посиланням
// * На функцію showThis об'єкта hotel.
// * Її виклик відбувається у глобальному контексті,
// * Про hotel вона нічого не знає.
// * Відповідно this не буде посилатися на hotel

// fn(hotel.showThis);

//! Spreed operator
// const a = {
//     en: 'Bye',
//     de: 'Tschüss'
//   }
// const b = {...a}
// b.de = 'Ciao'
// console.log('a :>> ', a);
// console.log('b :>> ', b);

// const flattenMap = (map,path=[]) => {
//   // Add your code here
//   const res = {};

//   for (const key in map) {
//     if (
//       typeof map[key] !== "object" ||
//       Array.isArray(map[key]) ||
//       map[key] === null
//     ) {
//       res[[...path, key].join("/")] = map[key];
//     } else {
//       Object.assign(res, flattenMap(map[key], [...path, key]));
//     }
//   }

//   return res;
// };

// console.log(
//   "flatten:>> ",
//   flattenMap({
//     a: {
//       b: {
//         c: 12,
//         d: "Hello World",
//       },
//       e: [1, 2, 3],
//     },
//   })
// );
//   {
//     'a/b/c': 12,
//     'a/b/d': 'Hello World',
//     'a/e': [1,2,3]
//   }

// Write a script which will check the correctness of
// brackets in string (15-30 min)

// function check(str) {
//   // please start writing your code here
//   const totalCount = {};
//   for (let i = 0; i < str.length; i++) {
//     totalCount[str[i]] = ++totalCount[str[i]] || 1;
//   }
// //   console.log("totalCount", totalCount);
// return totalCount["("] === totalCount[")"] && totalCount["["] === totalCount["]"] && totalCount["{"] === totalCount["}"]

// }

// console.log(check("([{])")); //true
// console.log(check("{{{{}}}}")); //true
// console.log(check("{([})]")); //false
// console.log(check("{([])}{([])}{([])}")); // true
// console.log(check("asdf{asdf}{f323[324]32}{324}")); //true
// console.log(check("4fff({f}f{[]tt})444[{}]tt")); //true
// console.log(check("{{{")); //false
// console.log(check("")); //true

//! ///////////////////////////////////

// function check(str) {
//   // please start writing your code here
//   let total = [];
//   for (let i = 0; i < str.length; i++) {
//     let last = total[total.length - 1];
//     if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
//       total.push(str[i]);
//     } else if (
//       (last === "(" && str[i] === ")") ||
//       (last === "{" && str[i] === "}") ||
//       (last === "[" && str[i] === "]")
//     ) {
//       total.pop();
//     } else {
//       return false;
//     }
//     console.log("total :>> ", total.length);
//   }

//   return total.length ? false : true;
// }
// console.log(check("{]}"));

// console.log(check("{{{{}}}}")); //true
// console.log(check("{([})]")); //false
// console.log(check("{([])}{([])}{([])}")); // true
// console.log(check("asdf{asdf}{f323[324]32}{324}")); //true?????????????
// console.log(check("4fff({f}f{[]tt})444[{}]tt")); //true
// console.log(check("{{{")); //false
// console.log(check("")); //true

//! лишити унікальні але не використовувати new Set
//! посортувати
// const arr = [1, 2, 3, "1", 1, 2];

// function unic(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log("unic ", unic(arr));
// const arrSet = new Set(arr);
// console.log("arrSet", arrSet);

// const arrFilterUniq = arr.filter((item, index, array) => {
//   return array.indexOf(item) === index;
// });
// console.log("arrFilterUniq", arrFilterUniq);

// const a = Symbol("one")
// const b = Symbol("one")
// console.log('a :>> ', a);
// console.log('b :>> ', b);
// console.log('b=a :>> ', a===b);
