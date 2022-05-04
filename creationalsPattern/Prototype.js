const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);

carl.name = "John";
console.log("personPrototype", personPrototype);
console.log("carl", carl);
carl.greet();
