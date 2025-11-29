"use strict";

const myLibrary = [];

function Book(title, author, pageQuantity, readStatus) {
  this.title = title;
  this.author = author;
  this.pageQuantity = pageQuantity;
  this.readStatus = readStatus;
  this.uuid = crypto.randomUUID();
}
