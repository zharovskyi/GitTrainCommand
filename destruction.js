// let user = {
//     name: "John",
//     years: 30
//   };
// const {name,years,isAdmin=false} = user;
// console.log(name);
// console.log(years);
// console.log(isAdmin);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// function topSalary(salaries) {
//   let max = 0;
//   let maxName = "";
//   for (const [name, salary] of Object.entries(salaries)) {
//     console.log(name);
//     console.log(salary);
//     if (max < salary) {
//       maxName = name;
//     }
//   }
//   return maxName;
// }
// console.log(topSalary(salaries));

const a = {
  id: 100,
  columns: 2,
  key: "dueDate",
  title: "Due-Date",
  handler: "taskStateHandler",
};

// 1) створити змінну key
// 2) створити змінні key і title  і test (в якій буде решта проперті обєкта)
// 3) створити змінну row яка буде брати значення з columns і змінну title
// 4) створити новий обєкт t який буде включати всі проперті з a і додасть ще один додатковий ключик
// 5) створити новий обєкт t який буде включати всі проперті з a і плюс ключик title: Roman
// 6) створити новий змінну key="test"
// 7) сперезаписати id та title ,а решту залишити

// const {key} = a;
// console.log('key :>> ', key);

// const {key,title,...test} = a;
// console.log('test :>> ', test);

// const { columns: row, title } = a;
// console.log('row ', row);

// const t = { ...a, addKey: "Add key" };
// console.log("t ", t);

// const t = { ...a,title: "Roman" };
// console.log("t ", t);

// const { key = "Test" } = a;
// console.log("key ", test);

// const b = {...a,id:101,title:"newTitle String"};
// const {title:newTitle,test="Test"} = b
// console.log("b", test);

//! Array destruc
// 1) скопіювати масив
// 2) додати новий елемент масиву
// 3) створити змінні name1 і name2

// const name = ["Andriy", "Vasul", "Petro","Igor"];

// 1)
// const name2 = [...name];
// console.log(name2);

// 2)
// const newElem = [...name,"Bob"];
// console.log("newElem", newElem);

// 3)
// const[name1,name2] = name;
// console.log('name1 :>> ', name1);  
// console.log('name2 :>> ', name2);

