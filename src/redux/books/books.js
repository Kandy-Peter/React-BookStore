import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KL5gDx1gyP10tYs4Jsta/books';
const initialState = [];
const fecthValue = (result, newArr) => {
  Object.keys(result).forEach((itemId) => {
    newArr.push({
      item_id: itemId,
      title: result[itemId][0].title,
      category: result[itemId][0].category,
    });
  });
};

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

// ---------------REDUCER------------------

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload.itemId)];
    case GET_BOOK:
      return action.payload;
    default:
      return state;
  }
};

// ----------------ACTIONS---------------

export const getBooksApi = () => (dispatch) => axios
  .get(url)
  .then((res) => {
    const newArr = [];
    fecthValue(res.data, newArr);
    dispatch(getBook(newArr));
  });

export const addNewBookApi = (obj) => (dispatch) => {
  const book = {
    item_id: obj.item_id,
    title: obj.title,
    category: obj.category,
  };
  dispatch(addBook(book));
  axios.post(url, obj);
};

export const deleteBookApi = (itemId) => (dispatch) => (
  axios({
    method: 'delete',
    url: `${url}/${itemId}`,
  }).then(() => dispatch(removeBook({ itemId })))
);

export default booksReducer;
