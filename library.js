// Library JS code

let myLibrary = [];

// Constructor for making book objects

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
}

function addBookToLibrary() {

}

// test books
const bookOne = new Book('On the Road', 'Jack Kerouac', 208, true);
const bookTwo = new Book('The Name of the Wind', 'Patrick Rothfuss', 458, true);

