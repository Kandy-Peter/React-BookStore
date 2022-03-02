const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

const getBooks = async () => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KL5gDx1gyP10tYs4Jsta/books');
  const data = await res.json();
  return data;
};

export const postBook = async (books) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KL5gDx1gyP10tYs4Jsta/books',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(books),
    });
};

export const deleteBook = async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KL5gDx1gyP10tYs4Jsta/books/${id}`,
    {
      method: 'DELETE',
    });
};

// first part

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

// -------------------------------

export const displayBooks = () => async (dispatch) => {
  const booksArr = await getBooks();
  const booksTemp = [];

  Object.keys(booksArr).forEach((id) => {
    booksTemp.push({
      item_id: id,
      title: booksArr[id][0].title,
      category: booksArr[id][0].category,
    });
  });

  dispatch(getBook(booksTemp));
};

export const addNewBookApi = (newBook) => async (dispatch) => {
  await postBook(newBook);
  dispatch(addBook(newBook));
};

export const deleteBookApi = (bookID) => async (dispatch) => {
  await deleteBook(bookID);
  dispatch(removeBook(bookID));
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    case GET_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
