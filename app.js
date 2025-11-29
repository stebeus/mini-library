"use strict";

const myLibrary = [];

function elementFromHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
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
