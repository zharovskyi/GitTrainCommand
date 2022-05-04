// ! Proto
// const animal = { eats: true };
// const dog = { eats: false };

// console.log('proto :>> ', animal.__proto__);
// dog.__proto__ = animal;
// const dog = Object.create(animal);
// console.log('dog.eats :>> ',dog.eats); 
// console.log('animal.eats :>> ', animal.eats);
// dog.name = 'Bob';
// console.log('dog.name :>> ', dog.name);
// console.log('animal.name :>> ', animal.name);

// // ! Class
class Guest {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getFullInfo() {
        console.log(`
        Name ${this.name}
        Age ${this.age}
      `);
    }
}

const oleh = new Guest('Oleh', 336);

oleh.getFullInfo();

//! Extends 
class Tourist extends Guest {
    constructor(name, sername) {
        super(name);
        this.sername = sername;
    }
    getSerneme() {
        console.log(`
        Name ${this.name}
        Sername ${this.sername}
        `);
    }
}
const andry = new Tourist('Andry', 'Pupkin');
andry.getSerneme();
