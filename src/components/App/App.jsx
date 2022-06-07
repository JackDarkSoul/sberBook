import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { BooksList } from '../BooksList';
import { AddBook } from '../AddBook';
import { Header } from '../Header';

import { getBooksList } from '../../redux/actionCreators/actionCreators';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { hideHeader } = useSelector(({ hideHeader }) => ({ hideHeader }));

  useEffect(() => {
    dispatch(getBooksList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='main__wrapper'>
      {!hideHeader ? <Header /> : null}
      <Routes>
        <Route path='/' element={<BooksList />} />
        <Route path='/addBook' element={<AddBook />} />
      </Routes>
    </div>
  );
};

export default App;
