// app.js

import { arrayOfBooks } from "./book.js";
import { Book } from "./bookManagement.js";

if (arrayOfBooks && Array.isArray(arrayOfBooks)) {
  const bookSummaries = arrayOfBooks.map((book) => {
    if (book instanceof Book && typeof book.getSummary === "function") {
      return book.getSummary();
    } else {
      return "Invalid book object";
    }
  });

  console.log(bookSummaries);
} else {
  console.error("arrayOfBooks is not defined or is not an array");
}