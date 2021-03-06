import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addNewBookApi } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title,
      category,
    };
    dispatch(addNewBookApi(newBook));
    setTitle('');
    setCategory('');
  };
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option className="active" hidden>Category</option>
          <option>Action</option>
          <option>Romantic</option>
          <option>Software</option>
          <option>Drama</option>
          <option>Science Fiction</option>
        </select>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default BookForm;
