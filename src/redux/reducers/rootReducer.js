import {
  GET_BOOKSLIST,
  DELETE_BOOK,
  ADD_BOOK,
  HEADER_HIDE,
  EDIT_BOOK,
} from '../actions/actions';

const initialState = {
  books: [],
  hideHeader: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKSLIST:
      return { ...state, books: [...action.payload] };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((el) => el.id !== action.payload),
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
        hideHeader: false,
      };
    case HEADER_HIDE:
      return {
        ...state,
        hideHeader: true,
      };

    case EDIT_BOOK:
      return {
        ...state,
        books: [
          ...state.books.map((el) => {
            if (el.id === action.payload.id) {
              el.volumeInfo = {
                ...el.volumeInfo,
                title: action.payload.volumeInfo.title,
                authors: action.payload.volumeInfo.authors,
                pageCount: action.payload.volumeInfo.pageCount,
              };
            }
            return el;
          }),
        ],
      };

    default:
      return state;
  }
};
