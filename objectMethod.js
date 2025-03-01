//! IF key not integer we get key the order of creation,|
//! IF integer we get  the order of integers
// let obj = {
//     // a : 1,
//     // c : 3,
//     // b : 2,
//     3 : 1,
//     1 : 3,
//     2 : 2,
//     '5' : 3,
//     '4' : 1,
//     '6' : 2,
//   };

// for (let key in obj){
//     console.log('key :>> ', key);
//     // console.log('value :>> ', obj[key]);

// }
////////////////////////////////////////////////////////////////////////////////////////////////
// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// const keys = Object.keys(hotel);//  ['name', 'stars', 'capacity']
// const values = Object.values(hotel); // ['Resort Hotel', 5, 100]
// const entries = Object.entries(hotel);// [Array(2), Array(2), Array(2)]
// console.log('keys :>> ', keys);
// console.log('values :>> ', values);
// console.log('entries :>> ', entries);

//! Spread operator
// const number = [7,4,5,1,5];
// const min = Math.min(...number) // 1

// const letters = ['a','v','b'];
// const copyOfName = [...letters];
// const sliceCopyOfName = letters.slice();
// console.log(letters == copyOfName); // false
// console.log(letters == sliceCopyOfName); // false

// const addNewLeeter = [...letters, 'A'];
// console.log('addNewLeeter',addNewLeeter);

//!Destructuring
// let arr = ["John", "Smith",'Oleh', 'Pypkin']
// let [firstName, surname,...rest] = arr;
// console.log('firstName :>> ', firstName);
// console.log('surname :>> ', surname);
// console.log('rest',rest);

////////////////////////////////////////////////////////////////////////////////////////////////
//! Copy of objects, use only for primitive
// const user = {
//     name: "John",
//     age: 30,
//     salary: '500$',
//     hobby: {
//         team: 'Dynamo',
//         goal: () => 5,
//     }
// };

//! Object assign
// const cloneOfUser = Object.assign([],user)
// const cloneOfUser = Object.assign({},user)

// console.log('cloneOfUser :>> ', cloneOfUser == user);
// console.log('user :>> ', user.hobby.goal());
// console.log('cloneOfUser :>> ', cloneOfUser.hobby.goal());
// console.log('cloneOfUser :>> ', cloneOfUser);

//! Spreed operator
// const a = {
//     en: 'Bye',
//     de: 'Tschüss'
//   }
// const b = {...a}
// b.de = 'Ciao'
// console.log('a :>> ', a);
// console.log('b :>> ', b);

//!  Nested Objects, Deep Copy
//! Method for deep Copy :
//!       - JSON.parse(JSON.stringify(object)),
//!       - _.cloneDeep(objects)(Lodash)
// const a = {
//     foods: {
//       dinner: 'Pasta',
//       supper: 'meat',
//       breakfast: ()=>1,
//     }
// }
// let b = {...a}
// let b = {};
// let b = a;
// for (var key in a) {
//     b[key] = a[key]
// }
// let b = JSON.parse(JSON.stringify(a)) //
// let b = _.cloneDeep(a);
// b.name = 'Potatoes';
// console.log('a', a===b);
// console.log('a ', a);
// console.log('b ', b);

//! Added key dinamicly
// const namePerson = 'Oleh';
// const keyPerson = 'name';
// const person = {
//     [keyPerson]: namePerson,
// }
// function checkName(obj) {
//     for (const key in obj) {
//         console.log('key :>> ', obj[key] === 'Oleh');
//         return obj[key] === 'Oleh' ? obj[key]='Oleh' : obj[key]="Roman"
//     }
// }
// checkName(person);
// console.log('person',person);

// const serName = 'Romario';
// const person = [
//     {name:'Oleh'},
//     {name:'Roman'},
//     {name:'Vova'},
// ]

// function checkName(obj) {
//     person.map(item => {
//         // if(item.name === 'Roman') {
//         //     item.sername = 'Romario'
//         // }else {
//         //     item;
//         // }
//        return item.name === 'Roman' ? item.surname = serName : item;
//     })
// }
// checkName(person);
// console.log('person',person);

//! Array methods
// const clients = ['Mango', 'Ajax', 'Poly','Kiwi'];
// const add  = clients.push('Pushed');
// const add  = clients.pop();
// const add  = clients.shift();
// const add  = clients.unshift();

// console.log('add :>> ', add);
// console.log(clients);
// SLICE arr.slice([start], [end])
// console.log('slice :>> ', clients.slice(1,3)); // ['Ajax', 'Poly'] - not include last element,return new Array
// console.log('clients',clients);

//Splice
//? splice(start)
//? splice(start, deleteCount)
//? splice(start, deleteCount, item1)
//? splice(start, deleteCount, item1, item2, itemN)
// -- delete Element
// const deletedClients = clients.splice(0, 3);
// console.log('deletedClients',deletedClients); //['Mango', 'Ajax', 'Poly']
// const pasteClients = clients.splice(4,0, 'Orange');
// console.log('pasteClients',pasteClients); //[] - no removed
// const pasteClients = clients.splice(-1,2,'Orange');
// console.log('pasteClients',pasteClients); //[] - no removed
// console.log('clients',clients); // [ 'Mango', 'Ajax','Orange', 'Poly', 'Kiwi']

// Reduce arr.reduce(callback(accumulator, item, currentIndex, array),initialValue)
// let arr = [3, 2, 3];
// let result = arr.reduce((sum, current) => {
//     return sum + current;
// },0
// );
// console.log('result :>> ', result);

// const id = 234435;

const users = [
  {
    username: "a",
    salary: 10,
    show: false,
    country: "UA",
  },
  {
    username: "b",
    salary: 20,
    show: true,
    country: "US",
  },
  {
    username: "c",
    salary: 30,
    show: false,
    country: "GB",
  },
  {
    username: "d",
    salary: 40,
    show: true,
    country: "US",
  },
];
//! getAllShowTrue filter
//  const getAllShowTrue = (users) => {
//     return users.filter(item=> item.show === true)
// }
// console.log('getAllShowTrue :>> ', getAllShowTrue(users));

// ! averageSalary reduce
// const averageSalary = (users) => {
//     const total = users.reduce((total,nextValue)=>{
//        return total + nextValue.salary;
//     },0)
//     return total / users.length;
// }
// console.log('averageSalary :>> ', averageSalary(users));

//! totalSalary
// const totalSalary = (users) => {
//     const total = users.reduce((total,nextValue)=>{
//        return total + nextValue.salary;
//     },0)
//     return total;
// }
// console.log('totalSalary :>> ', totalSalary(users));

//! usersFrom US
// const usersFrom = (users) => {
//     return users.reduce((newArr,user)=>{
//         if (user.country === 'US') {
//             newArr.push(user);
//           }
//           return newArr;
//     },[])

// }
// console.log('totalUsersFrom :>> ', usersFrom(users));

const points = {
  a: 2500,
  b: 150,
  c: 800,
};

//! Added Additional Key
const additionalKey = users.reduce((newObj, user) => {
  // console.log("newObj ", newObj);
  // console.log("user", user);
  const key = user.username;
  
  if (points[key]) {
    user.points = points[key];
  } else {
    user.points = 0;
  }
  // newObj[key] = user;
  // console.log("key", newObj);
  return newObj;
}, {});
console.log("additionalKey :>> ", additionalKey);

