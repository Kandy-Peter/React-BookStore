import React from 'react';
import { useSelector } from 'react-redux';
import Book from './bookContent';
import BookForm from './BookForm';
import isEmpty from './Utils';

const Books = () => {
  const postBook = useSelector((state) => state.booksReducer);

  return (
    <div className="book-clm">
      {!isEmpty(postBook) && postBook.map((post) => (
        <Book
          post={post}
          key={post.id}
          title={post.title}
          author={post.author}
          category={post.category}
        />
      ))}
      <BookForm />
    </div>
  );
};

export default Books;
