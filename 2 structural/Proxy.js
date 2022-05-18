//! Структурні паттерни дозволяють інтегрувати додатковий функціонал до проекту не ламаючи даний

//! Об'єкт Proxy дозволяє створити обгортку для іншого об'єкта,
//! який може перехоплювати та перевизначати основні операції для цього об'єкта,
//! часто використовується для кешування

// original object
const person = {
  firstName: "Lena",
  lastName: "Smith",
};

// use proxy add logic on person
const personProxy = new Proxy(person, {
  get: (target, prop) => {
    if (prop === "fullNames") {
      return `${target.firstName} ${target.lastName}`;
    }
    return target[prop];
  },
  
});

// throw the proxy object, we can get full name
console.log(personProxy.fullNames); // "Lena Smith"
