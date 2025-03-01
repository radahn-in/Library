const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("#title")
  let author = document.getElementById("#author")
  let pages = document.getElementById("#pages")
  let read = document.getElementById("#read").checked;
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook);
}

/*const dataElements = document.querySelector('.library');

myLibrary.map(book => {
  dataElements.insertAdjacentHTML('afterbegin', `
    
`)
})*/

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener('click', function () {
  let bookForm = document.querySelector('#book-form');
  bookForm.style.display = "block"
})

