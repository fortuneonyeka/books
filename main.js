const title = document.querySelector('#book-title')
const author = document.querySelector('#book-author')
const btn = document.querySelector('.btn')
const bookHolder = document.querySelector('#bookContainer')

function clearOut() {
  title.value = '';
  author.value = '';
}

function Book(title, author) {
  this.title = title
  this.author = author
}
let books = JSON.parse(localStorage.getItem('books')) || [];

console.log(books)
function addBook() {
  const newBook = new Book(title.value, author.value)

  books.push(newBook)
  localStorage.setItem('books', JSON.stringify(books))
}

function listBooks(books) {

  books.forEach((book) => {
    const li = document.createElement("li");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const remove = document.createElement("button");
    const line = document.createElement("hr");
    remove.classList = 'delete'
    remove.innerText = "Remove";
    bookTitle.innerText = "title name: " + book.title;
    bookAuthor.innerText = "Author: " + book.author;
    li.append(bookTitle, bookAuthor, remove, line);
    bookHolder.appendChild(li)
  })

}

listBooks(books)

bookHolder.onclick = (e) => {
  e.preventDefault();
  // console.log(e.target.parentElement.parentElement)
  if (e.target.classList.contains('delete')) {
    const parent = e.target.parentElement;
    parent.remove()
  }
};

btn.onclick = (e) => {
  e.preventDefault();
  addBook()
  // clearOut()
  listBooks(books)
};
