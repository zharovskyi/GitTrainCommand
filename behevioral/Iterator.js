//! Метод за допомогою 
//! якого можна послідовно отримувати доступ до необхідної інформації, як Saga

class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }
  next() {
    return this.elements[this.index++];
  }
  hasNextElement() {
    return this.index <= this.elements.length;
  }
  first() {
    this.index = 0;
    return this.next();
  }
}

function iterate() {
  var items = ["Yello", "Green", "Blue"];
  var iter = new Iterator(items);
  for (var i = iter.first(); iter.hasNextElement(); i = iter.next()) {
    console.log(i);
  }
}

iterate();
