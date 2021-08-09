const form = document.querySelector('#form-book')
const title = document.querySelector('#book-title')
const author = document.querySelector('#book-author')
const btn = document.querySelector('.btn')

const books = []

function Book(title, author){
    this.title = title
    this.author = author  
    // books.push({title, author})
}

function addBook(){
    const newBook = new Book(title.value, author.value)

    books.push(newBook)
}

btn.onclick = (e) => {
    e.preventDefault();
    addBook()
    console.log(books)
  };