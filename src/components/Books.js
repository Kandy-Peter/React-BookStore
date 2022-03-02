import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Book from './bookContent';
import BookForm from './BookForm';
import isEmpty from './Utils';
import { displayBooks, deleteBookApi } from '../redux/books/books';

const Books = () => {
  const postBook = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteBookApi(id));
  };

  return (
    <div className="book-clm">
      {!isEmpty(postBook) && postBook.map((post) => (
        <div key={post.item_id} className="bookStore">
          <div className="details-clm">
            <p>{post.category}</p>
            <h3>{post.title}</h3>
            <div className="buttons">
              <button type="button">Comments</button>
              <button type="button" onClick={() => handleDelete(post.item_id)}>Remove</button>
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
      ))}
      <BookForm />
    </div>
  );
};

export default Books;
