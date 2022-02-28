import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: nextId(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
    setAuthor('');
  };
  return (
    <div className="form-container">
      <form onSubmit={submitBookToStore}>
        <input
          type="text"
          placeholder="Author name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book title..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" hidden>Category</option>
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
