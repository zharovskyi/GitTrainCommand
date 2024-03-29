//! Він дозволяє об’єктам ( спостерігачам ), які підписалися на подію,
//! чекати введення та реагувати на нього,
//! коли отримують повідомлення;
//! тобто їм не потрібно постійно перевіряти, чи надано вхідні дані

class Subject{
    constructor(){
        this.observerList = []
        this.newArticlePosted = false
        this.articleName = null
    }
    subscribe(observer){
        this.observerList.push(observer)
    }
	unsubscribe(observer){
        this.observerList = this.observerList.filter(obs => obs !== observer)
    }
    notify(){
        if(this.newArticlePosted){
            this.observerList.forEach(subscriber => subscriber.update())
        }
        else{
            return 
        }
    }
    getUpdate(){
        return this.articleName
    }
    postNewArticle(articleName){
        this.articleName = articleName
        this.newArticlePosted = true
        this.notify()
    }
}

class Observer{
    constructor(){
        this.subject = new Subject()
    }
    update(){
        if(subject.getUpdate() == null){
            console.log("No new article")
        }else{
            console.log(`The new article ${subject.getUpdate()} is posted`)
        }
    }
    setSubject(subject){
        this.subject = subject
    }
}
var subject = new Subject()
var observer = new Observer()
observer.setSubject(subject)
subject.subscribe(observer)
observer.update()
subject.postNewArticle("Dark matter")