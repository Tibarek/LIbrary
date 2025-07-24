const myLibrary = [];

function Book(title, author, year, id) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(title, author, year, bookName) {

    bookName = new Book(title, author, year);
    myLibrary.push(bookName)
}

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[0]);
    }
}

addBookToLibrary("You Become What You Think", "Justice", 1997, "thought");
addBookToLibrary("You Become What You Think", "Justice", 1997, "thought2");


// console.log(myLibrary)
displayBooks();