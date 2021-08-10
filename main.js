const title = document.querySelector('#title')
const author = document.querySelector('#author')
const btn = document.querySelector('.btn')
const bookHolder = document.querySelector('#bookContainer')
let books = []
function clearOut() {
  title.value = '';
  author.value = '';
}

function Book(title, author) {
  this.title = title
  this.author = author
}

function updateLocalStorage() {
  localStorage.books = JSON.stringify(books);
  getBooks();
}

function addBook() {
  const newBook = new Book(title.value, author.value)

  books.push(newBook)
  
updateLocalStorage();
}


function destroyBook(id) {
  books.splice(id, 1);
  updateLocalStorage();
}


function getBooks() {
  books = JSON.parse(localStorage.books);
  bookHolder.innerHTML = "";
  let id = 0;
  for (book of books) {
    bookHolder.innerHTML += `
    <div>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button onClick="destroyBook(${id++})">Remove</button>
    </div>`;
  }
}


btn.onclick = (e) => {
  e.preventDefault();
  addBook()
  clearOut()
};
if (localStorage.length > 0) getBooks();
