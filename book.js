const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.initEventListeners();
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook)
    this.display();
  }
  removeBook(index) {
    this.books.splice(index, 1);
    this.display();
  }

  display() {
    const libraryEl = document.querySelector('.library');
    libraryEl.innerHTML = "";

    this.books.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');

      bookDiv.innerHTML = `
      <p><strong>Title:</strong> ${book.title}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      <button onclick="removeBook(${index})">Remove</button>
        `;
      libraryEl.appendChild(bookDiv);

    });
  }
}
function display() {
  let libraryEl = document.querySelector(".library");
  libraryEl.innerHTML = "";

  myLibrary.forEach((book, index) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

  })
}
function removeBook(index) {
  myLibrary.splice(index, 1);
  display();
}

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener('click', function() {
  let bookForm = document.querySelector('#book-form');
  bookForm.style.display = "block"
});

document.querySelector('#add-book-btn').addEventListener("click", function(e) {
  e.preventDefault();
  addBookToLibrary();
})

