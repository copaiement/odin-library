// Library JS code

// event listener for add book
document.querySelector('.add-book').addEventListener('click', openModal);

// event listener for submit form
document.querySelector('#submit-btn').addEventListener('click', submit);

let myLibrary = [];

// update book Constructor to a class
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// Constructor for making book objects

// function Book(title, author, pages) {
//   this.title = title,
//   this.author = author,
//   this.pages = pages
// }

function openModal() {
  document.querySelector('.add-book').classList.add('hidden');
  document.querySelector('.modal').classList.remove('hidden');
}

function closeModal() {
  document.querySelector('.add-book').classList.remove('hidden');
  document.querySelector('.modal').classList.add('hidden');
}

function submit(event) {
  const form1 = document.querySelector('#title-input').reportValidity();
  const form2 = document.querySelector('#author-input').reportValidity();
  const form3 = document.querySelector('#pages-input').reportValidity();
  if (form1 && form2 && form3) {
    event.preventDefault();
    // add error checking to see if book already exists??
    closeModal();
    addBook();
  }
}

function setStatus(element) {
  if (element.getAttribute('class') === 'read') {
    element.classList.remove('read');
    element.classList.add('unread');
    element.innerHTML = 'Unread';
  } else {
    element.classList.remove('unread');
    element.classList.add('read');
    element.innerHTML = 'Read';
  }
}

function addBook() {
  // get book info
  const titleInput = document.querySelector('#title-input');
  const authorInput = document.querySelector('#author-input');
  const pagesInput = document.querySelector('#pages-input');
  // add book to library
  const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);
  myLibrary[myLibrary.length] = newBook;
  // clear inputs
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  // set up queries
  const library = document.querySelector('.library-container');
  const addBookBtn = document.querySelector('.add-book');
  const card = document.createElement('div');
  // insert card
  library.insertBefore(card, addBookBtn);
  card.classList.add('library-card');
  card.setAttribute('id', `${newBook.title}`);
  // insert img child
  const img = document.createElement('img');
  card.appendChild(img);
  img.classList.add('book-img');
  img.setAttribute('src', './images/book-open-variant.svg');
  img.setAttribute('alt', 'open book graphic');
  // insert book-infor child container
  const info = document.createElement('div');
  card.appendChild(info);
  info.classList.add('book-info');
  // insert title child
  const titleDiv = document.createElement('div');
  info.appendChild(titleDiv);
  titleDiv.classList.add('title');
  titleDiv.textContent = `${newBook.title}`;
  // insert author child
  const authorDiv = document.createElement('div');
  info.appendChild(authorDiv);
  authorDiv.classList.add('author');
  authorDiv.textContent = `By ${newBook.author}`;
  // insert pages child
  const pagesDiv = document.createElement('div');
  card.appendChild(pagesDiv);
  pagesDiv.classList.add('pages');
  pagesDiv.textContent = `${newBook.pages} pages`;
  // insert buttons child container
  const btns = document.createElement('div');
  card.appendChild(btns);
  btns.classList.add('card-buttons');
  // add read button
  const readBtn = document.createElement('button');
  btns.appendChild(readBtn);
  readBtn.classList.add('unread');
  readBtn.setAttribute('id', 'status-btn');
  readBtn.setAttribute('onclick', 'setStatus(this)');
  readBtn.textContent = 'Unread';
  // add remove button
  const removeBtn = document.createElement('button');
  btns.appendChild(removeBtn);
  removeBtn.classList.add('remove');
  removeBtn.setAttribute('onclick', 'remove(this)');
  removeBtn.textContent = 'Remove';
}

function remove(element) {
  // find the book id
  const id = element.parentNode.parentNode.getAttribute('id');
  // remove book from library array
  const idIndex = myLibrary.map(e => e.title).indexOf(id);
  myLibrary.splice(idIndex, 1);
  // remove from html
  element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
}
