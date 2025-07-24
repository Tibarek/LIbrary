const tableContent = document.querySelector(".shelf")
const myLibrary = [];

function Book(title, author, pages) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.ID = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {

    let bookName = new Book(title, author, pages);
    myLibrary.push(bookName)
}

function displayBooks(){
    for(let book of myLibrary){
        let contents = Object.keys(book);
        let tableRow = document.createElement("tr");
        tableContent.appendChild(tableRow);
        contents.forEach((content) => {
            let tableData = document.createElement("td");
            tableData.textContent = book[content];
            tableRow.appendChild(tableData);
        });
    }
}

addBookToLibrary("You Become What You Think", "Justice", 197);
addBookToLibrary("Atomic Habits", "Steve", 220);

displayBooks();