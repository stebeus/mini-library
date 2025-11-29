"use strict";

const myLibrary = [];

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
