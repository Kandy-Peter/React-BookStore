import React from 'react';

const Book = (book) => {
  const { category, title, author } = book;
  return (
    <div className="bookStore">
      <div className="details-clm">
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
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
