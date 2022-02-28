import React from 'react';

const BookForm = () => (
  <div className="form-container">
    <form>
      <input type="text" placeholder="Book title..." />
      <select name="category">
        <option>Action</option>
        <option>Drama</option>
        <option>Science Fiction</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  </div>
);

export default BookForm;
