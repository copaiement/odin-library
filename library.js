// Library JS code

// event listener for add book
const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', openModal);

// event listener for submit button
const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', submit);

let myLibrary = [];

// Constructor for making book objects

function Book(title, author, pages) {
  this.title = title,
  this.author = author,
  this.pages = pages
}

function openModal() {
  document.querySelector('.add-book').classList.add('hidden');
  document.querySelector('.modal').classList.remove('hidden');
}

function submit(event) {
  event.preventDefault();
  getBookInfo();
}

function getBookInfo() {
  const title = document.querySelector('#title-input').value;
  const author = document.querySelector('#author-input').value;
  const pages = document.querySelector('#pages-input').value;

  const newBook = new Book(title, author, pages);
  myLibrary[myLibrary.length - 1] = newBook;

  // hide modal and show button
  document.querySelector('.add-book').classList.remove('hidden');
  document.querySelector('.modal').classList.add('hidden');
}

function setStatus() {
  const status = document.querySelector('#status-btn');
  if (status.getAttribute('class') === 'read') {
    status.classList.remove('read');
    status.classList.add('unread');
    status.innerHTML = 'Unread';
  } else {
    status.classList.remove('unread');
    status.classList.add('read');
    status.innerHTML = 'Read';
  }
}

function remove() {
  // remove book from library array

  // remove from html
}

// test books
const bookOne = new Book('On the Road', 'Jack Kerouac', 208, true);
const bookTwo = new Book('The Name of the Wind', 'Patrick Rothfuss', 458, true);

