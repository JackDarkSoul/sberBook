import { useState } from 'react';
import { useDispatch } from 'react-redux';
import pic from '../../assets/img/images.jpg';
import { DELETE_BOOK, EDIT_BOOK } from '../../redux/actions/actions';
import './Book.css';

const Book = ({
  title,
  authors,
  pageCount,
  publisher,
  publishedDate,
  imageLinks,
  isbn,
  id,
}) => {
  const initialState = {
    id: id,
    volumeInfo: {
      title: title,
      authors: authors,
      pageCount: pageCount,
      publisher: publisher,
      publishedDate: publishedDate,
      isbn: isbn?.length ? isbn[1] : '-',
    },
  };

  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT_BOOK, payload: state });
  };

  return (
    <li className='item__wrapper'>
      <div className='image__wrapper'>
        <img
          className='img'
          src={imageLinks ? imageLinks.thumbnail : pic}
          alt='logo'
        />
      </div>
      <form className='description__wrapper' onSubmit={submit}>
        <div className='description__item'>
          <span className='description__title'>Title:</span>
          <input
            type='text'
            className='input-text'
            value={state.volumeInfo.title}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                volumeInfo: { ...state.volumeInfo, title: e.target.value },
              }))
            }
          />
        </div>
        <div className='description__item'>
          <span className='description__title'>Authors:</span>
          <input
            type='text'
            className='input-text'
            value={state.volumeInfo?.authors.join(', ')}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                volumeInfo: {
                  ...state.volumeInfo,
                  authors: e.target.value.split(', '),
                },
              }))
            }
          />
        </div>
        <div className='description__item'>
          <span className='description__title'>Pages:</span>
          <input
            type='number'
            className='input-text'
            value={state.volumeInfo.pageCount}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                volumeInfo: {
                  ...state.volumeInfo,
                  pageCount: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className='description__item'>
          <span className='description__title'>Publisher:</span>
          <div className='text'>{state.volumeInfo.publisher}</div>
        </div>
        <div className='description__item'>
          <span className='description__title'>Publish Date:</span>
          <div className='text'>{state.volumeInfo.publishedDate}</div>
        </div>
        <div className='description__item'>
          <span className='description__title'>
            {state.volumeInfo.isbn?.type}
          </span>
          <div className='text'>{state.volumeInfo.isbn?.identifier}</div>
        </div>
        <input type='submit' className='hidden__button' />
      </form>
      <button
        className='delete__button'
        onClick={() => dispatch({ type: DELETE_BOOK, payload: id })}
      >
        x
      </button>
    </li>
  );
};

export default Book;
