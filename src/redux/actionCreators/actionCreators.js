import { GET_BOOKSLIST } from '../actions/actions';
import filterBooks from '../../utils/filterBooks';

export const getBooksList = () => async (dispatch) => {
  const result = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=anime&printType=all&maxResults=21`
  );
  const json = await result.json();
  if (result.ok) {
    const filteredResult = filterBooks(json.items);
    dispatch({
      type: GET_BOOKSLIST,
      payload: [...filteredResult],
    });
  }
};
