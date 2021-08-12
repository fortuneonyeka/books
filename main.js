/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btn = document.querySelector('.btn');
const bookHolder = document.querySelector('#bookContainer');
const list = document.querySelector('#list');
const add = document.querySelector('#add');
const contact = document.querySelector('#contact');

const dt = new Date();
document.getElementById('date-time').innerHTML = dt;

list.onclick = (e) => {
  e.preventDefault();
  document.querySelector('.add').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.show-list').style.display = 'block';
};

add.onclick = (e) => {
  e.preventDefault();
  document.querySelector('.show-list').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.add').style.display = 'block';
};

contact.onclick = (e) => {
  e.preventDefault();
  document.querySelector('.show-list').style.display = 'none';
  document.querySelector('.add').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
};

let books = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static clearOut() {
    title.value = '';
    author.value = '';
  }
}

class UI {
  static getBooks() {
    books = JSON.parse(localStorage.books);
    bookHolder.innerHTML = '';
    let id = 0;
    for (const book of books) {
      bookHolder.innerHTML += `
      <div class="display">
        <p class="book"> ${book.title} by ${book.author}</p>
        
        <button class ="remove" onClick="UI.destroyBook(${id++})">Remove</button> 
      </div>`;
    }
  }

  static updateLocalStorage() {
    localStorage.books = JSON.stringify(books);
    UI.getBooks();
  }

  static addBook() {
    const newBook = new Book(title.value, author.value);

    books.push(newBook);

    UI.updateLocalStorage();
  }

  static destroyBook(id) {
    books.splice(id, 1);
    UI.updateLocalStorage();
  }
}

btn.onclick = (e) => {
  e.preventDefault();
  UI.addBook();
  Book.clearOut();
};
if (localStorage.length > 0) UI.getBooks();
