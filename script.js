const tableContent = document.querySelector(".shelf");
const dialog = document.querySelector("dialog");
const newBook = document.querySelector(".addBook");
const closeDialog = document.querySelector(".close");
const submitBook = document.querySelector(".submit");
const bookData = document.querySelector(".books");
const myLibrary = [];

function Book(title, author, pages, read) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.ID = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


document.getElementById("bookForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formTitle = document.getElementById("title").value;
  const formAuthor = document.getElementById("author").value;
  const formPages = document.getElementById("pages").value;
  const hasRead = document.querySelector('input[name="read"]:checked');
  const formRead = hasRead ? hasRead.value : 'Not selected';

  addBookToLibrary(formTitle, formAuthor, formPages, formRead);
  bookData.textContent = "";
  displayBooks();
  dialog.close();
});

function addBookToLibrary(title, author, pages, read) {
  let bookName = new Book(title, author, pages, read);
  myLibrary.push(bookName);
}

function displayBooks(){
  for(let book of myLibrary){
    let contents = Object.keys(book);
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("data-id", book.ID);
    bookData.appendChild(tableRow);
    contents.forEach((content) => {
      let tableData = document.createElement("td");
      tableData.textContent = book[content];
      tableRow.appendChild(tableData);
      });
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("data-target", book.ID);
    removeBtn.addEventListener(("click") , removeBook);
    tableRow.appendChild(removeBtn);

    const readStatus = document.createElement("button");
    readStatus.textContent = "Change Read";
    readStatus.addEventListener(("click"), () => {
      book.toggleReadStatus();
      bookData.textContent = "";
      displayBooks();
    });
    tableRow.appendChild(readStatus);
  }
}

function removeBook(e) {
  const targetId = e.target.getAttribute("data-target");
  const rowToDelete = document.querySelector(`tr[data-id="${targetId}"]`);
  if (rowToDelete) {
    rowToDelete.remove();
    for(let book of myLibrary){
      if(book.ID === targetId){
        const index = myLibrary.indexOf(book);
        if (index !== -1) {
          myLibrary.splice(index, 1);
        }
      }
    }
  }
}

Book.prototype.toggleReadStatus = function () {
  if(this.read == "Yes"){
    this.read = "No";
  }else {
    this.read = "Yes";
  }
};


newBook.addEventListener("click" , (event) => {
    dialog.showModal();
});

closeDialog.addEventListener("click", (e) =>{
    e.preventDefault();
    dialog.close();
});

addBookToLibrary("You Become What You Think", "Justice", 197, "No");
addBookToLibrary("Atomic Habits", "Steve", 220, "Yes");

displayBooks();




