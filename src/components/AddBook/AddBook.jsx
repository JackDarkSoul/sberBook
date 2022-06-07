import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ADD_BOOK } from '../../redux/actions/actions';

import './AddBook.css';

const AddBook = () => {
  const initialState = {
    id: '',
    volumeInfo: {
      title: '',
      authors: [],
      pageCount: 0,
    },
  };

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_BOOK, payload: { ...state, id: uuid() } });
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <label htmlFor='title'>Title:</label>
      <input
        className='input'
        id='title'
        type='text'
        onChange={(e) =>
          setState({
            ...state,
            volumeInfo: { ...state.volumeInfo, title: e.target.value },
          })
        }
        required
        placeholder='Title'
      />
      <label htmlFor='author'>Authors:</label>
      <input
        className='input'
        id='author'
        type='text'
        onChange={(e) =>
          setState({
            ...state,
            volumeInfo: {
              ...state.volumeInfo,
              authors: [e.target.value],
            },
          })
        }
        required
        placeholder='Author'
      />
      <label htmlFor='pages'>Pages:</label>
      <input
        className='input'
        type='number'
        id='pages'
        min='1'
        max='10000'
        onChange={(e) =>
          setState({
            ...state,
            volumeInfo: {
              ...state.volumeInfo,
              pageCount: e.target.value,
            },
          })
        }
        required
        placeholder='Pages'
      />
      <label htmlFor='author'>Publisher:</label>
      <input
        className='input'
        id='publisher'
        type='text'
        onChange={(e) =>
          setState({
            ...state,
            volumeInfo: {
              ...state.volumeInfo,
              publisher: [e.target.value],
            },
          })
        }
        placeholder='Publisher'
      />
      <label htmlFor='publishDate'>Publish Date:</label>
      <input
        className='input'
        id='publishDate'
        type='text'
        onChange={(e) =>
          setState({
            ...state,
            volumeInfo: {
              ...state.volumeInfo,
              publishedDate: [e.target.value],
            },
          })
        }
        placeholder='Publish Date'
      />
      <input type='submit' className='input__button' />
    </form>
  );
};

export default AddBook;
