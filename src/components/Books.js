import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BookForm from './BookForm';
import isEmpty from './Utils';
import { deleteBookApi } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Books = () => {
  const postBook = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const percentage = 66;

  const handleDelete = (id) => {
    dispatch(deleteBookApi(id));
  };

    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '16px',
        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    />;

    return (
      <div className="book-clm">
        {!isEmpty(postBook) && postBook.map((post) => (
          <div key={post.item_id} className="bookStore">
            <div className="details-clm">
              <h4>{post.category}</h4>
              <h3>{post.title}</h3>
              <div className="buttons">
                <button type="button">Comments</button>
                <button type="button" onClick={() => handleDelete(post.item_id)}>Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="progress-clm">
              <div className="progress-bar">
                <CircularProgressbar value={percentage} />
              </div>
              <div className="numbers">
                <p>64%</p>
                <p>Completed</p>
              </div>
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
