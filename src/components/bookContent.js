import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (book) => {
  const {
    category, title, author,
  } = book;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookStore">
      <div className="details-clm">
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleDelete()}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-clm">
        <p>55%</p>
        <p>Completed</p>
      </div>
      <div className="update-clm">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
