// const form = document.querySelector('#form-book')
const title = document.querySelector('#book-title')
const author = document.querySelector('#book-author')
const btn = document.querySelector('.btn')
const infoContainer = document.querySelector('#infoContainer')
const remove = document.createElement("button")
remove.innerText = " Remove"

const books = function() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }


const books = [
//     {
//     "title": "java",
//     "author": "unknown"
//   },
//   {
//     "title": "C++",
//     "author": "Someone Else"
//   },
//   {
//     "title": "ruby",
//     "author": "Another Man"
//   },
]


function Book(title, author){
    this.title = title
    this.author = author  
}

function addBook(){
    const newBook = new Book(title.value, author.value)

    books.push(newBook)
}

  const createBookElement = ({ title, author }) => {
  // Create elements
  const bookDiv = document.createElement("small");
  const bookTitle = document.createElement("h5");
  const bookAuthor = document.createElement("p");
  const line = document.createElement("hr");

  // Fill the content
  bookTitle.innerText = "title name: " + title;
  bookAuthor.innerText = "Author: " + author;
  

  // Add to the DOM
  bookDiv.append(bookTitle,bookAuthor, remove, line);
  infoContainer.appendChild(bookDiv);
};

function listBooks(books){
      
    books.forEach(createBookElement)
      
  }


  btn.onclick = (e) => {
    e.preventDefault();
    addBook()
    listBooks(books)

    remove.onclick = (e) => {
        e.preventDefault();
        e.target.parentElement.remove()
      };
    
  };