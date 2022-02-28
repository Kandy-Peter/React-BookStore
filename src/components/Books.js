import React from 'react';
import Book from './bookContent';
import BookForm from './BookForm';

const Books = () => (
  <div className="book-clm">
    <Book
      title="barbara fgotja"
      author="Conrad James"
      category="Action"
    />
    <Book
      title="War of the year"
      author="Conrad James"
      category="Fiction"
    />
    <BookForm />
  </div>
);

export default Books;
