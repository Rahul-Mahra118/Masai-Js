function Book(title ,author){
    let obj={}
    obj.title=title;
    obj.author=author;
    obj.details= function(){
      console.log(`Title:${this.title} , author: ${this.author}`)
    }
    return obj;

}

function createLibrary(){
    let obj={}
    let arr=[]
     obj.addBook=function(book){
         arr.push(book);
         console.log(`Added Book :${book.title} , author: ${book.author}`)
     }
     //remove
     obj.removeBook=function(title){
        const len= arr.length;
        arr=arr.filter(book=>book.title !==title);
        if(arr.length<len){
            console.log("book removed successfully")
        }
        else{
            console.log('Book not found',title)
        }

     }
     obj.listBooks=function(){
        if(arr.length===0){
            console.log("Library is empty")
           return;}

           console.log("collection")
           arr.forEach(book=>book.details());
     }
    

     return obj;
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

