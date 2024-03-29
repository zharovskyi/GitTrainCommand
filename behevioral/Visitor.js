//! Дозволяє визначати нові операції з колекцією об'єктів,
//! не змінюючи структуру самих об'єктів

class Book{
    constructor(id,name,price){
        this.id = id
        this.name = name
        this.price = price
    }
    getPrice(){
        return this.price
    }
    getName(){
        return this.name
    }
    getID(){
        return this.id
    }
    accept(visitor){
        return visitor.visit(this)
    }
}


class Visitor {
    visit(item){}
}

class BookVisitor extends Visitor {
    visit(book) {
        var cost=0; 
        if(book.getPrice() > 50) 
        { 
            cost = book.getPrice()*0.50 
        } 
        else{
            cost = book.getPrice()
        }     
        console.log("Book name: "+ book.getName() + "\n" + "ID: " + book.getID() + "\n" + "cost: "+ cost); 
        return cost; 
    }
}



var visitor = new BookVisitor()
var book1 = new Book("#1234","lordOftheRings",80)
book1.accept(visitor)