// Library JS code

// event listener for add book
document.querySelector('.add-book').addEventListener('click', openModal);

// event listener for submit form
document.querySelector('#submit-btn').addEventListener('click', submit);

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
    closeModal();
    addBook();
  }
}

// These change only the first button. Figure this out.
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

function addBook() {
  // get book info
  const titleInput = document.querySelector('#title-input').value;
  const authorInput = document.querySelector('#author-input').value;
  const pagesInput = document.querySelector('#pages-input').value;
  // add book to library
  const newBook = new Book(titleInput, authorInput, pagesInput);
  myLibrary[myLibrary.length] = newBook;
  // set up queries
  const library = document.querySelector('.library-container');
  const addBookBtn = document.querySelector('.add-book');
  const card = document.createElement('div');
  // insert card
  library.insertBefore(card, addBookBtn);
  card.classList.add('library-card');
  // insert img child
  const img = document.createElement('img');
  card.appendChild(img);
  img.classList.add('book-img');
  img.setAttribute('src', './images/book-open-variant.svg');
  img.setAttribute('alt', 'open book graphic');
  // insert title child
  const title = document.createElement('div');
  card.appendChild(title);
  title.classList.add('title');
  title.textContent = `${newBook.title} by ${newBook.author}`;
  // insert pages child
  const pages = document.createElement('div');
  card.appendChild(pages);
  pages.classList.add('pages');
  pages.textContent = `${newBook.pages} pages`;
  // insert buttons child container
  const btns = document.createElement('div');
  card.appendChild(btns);
  btns.classList.add('card-buttons');
  // read button
  const readBtn = document.createElement('button');
  btns.appendChild(readBtn);
  readBtn.classList.add('unread');
  readBtn.setAttribute('id', 'status-btn');
  readBtn.setAttribute('onclick', 'setStatus()');
  readBtn.textContent = 'Unread';
  // remove button
  const removeBtn = document.createElement('button');
  btns.appendChild(removeBtn);
  removeBtn.classList.add('remove');
  removeBtn.setAttribute('onclick', 'remove()');
  removeBtn.textContent = 'Remove';
}

function remove() {
  // remove book from library array

  // remove from html
}

// test books
const bookOne = new Book('On the Road', 'Jack Kerouac', 208, true);
const bookTwo = new Book('The Name of the Wind', 'Patrick Rothfuss', 458, true);

