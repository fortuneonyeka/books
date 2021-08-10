/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btn = document.querySelector('.btn');
const bookHolder = document.querySelector('#bookContainer');

let books = [];

function clearOut() {
  title.value = '';
  author.value = '';
}
class Book{
  constructor(title, author) {
    this.title = title;
    this.author = author;
}
}


class UI{
  
  static getBooks() {
    books = JSON.parse(localStorage.books);
    bookHolder.innerHTML = '';
    let id = 0;
    for (const book of books) {
      bookHolder.innerHTML += `
      <div>
        <p><strong>title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <button onClick="UI.destroyBook(${id++})">Remove</button> 
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
  clearOut();
};
if (localStorage.length > 0) UI.getBooks();
