"use strict";

const grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");

const myLibrary = [];

function elementFromHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function delegateEvent(type, selector, callback, parent = document) {
  parent.addEventListener(type, (e) => {
    if (e.target.closest(selector)) {
      callback(e);
    }
  });
}

function Book(title, author, pageQuantity, readStatus) {
  this.title = title;
  this.author = author;
  this.pageQuantity = pageQuantity;
  this.readStatus = readStatus;
  this.uuid = crypto.randomUUID();
}

function addBookToLibrary(title, author, pageQuantity, readStatus) {
  const book = new Book(title, author, pageQuantity, readStatus);
  myLibrary.push(book);
}

function renderLibrary(book) {
  const bookCard = elementFromHTML(`
    <article class="book">
      <h3 class="book__title">${book.title}</h3>
      <p class="book__author">${book.author}</p>
      <p class="book__pages">${book.pageQuantity}</p>
      <button type="button">${book.readStatus}</button>
    </article>
  `);
  grid.appendChild(bookCard);
}
