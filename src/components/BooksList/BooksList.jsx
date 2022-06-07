import React from 'react';

import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { Book } from '../Book';

import './BooksList.css';

const BooksList = () => {
  const { books } = useSelector(({ books }) => ({ books }));

  const result = books.map((el) => (
    <Book
      key={uuid()}
      title={el.volumeInfo.title}
      authors={el.volumeInfo.authors}
      pageCount={el.volumeInfo.pageCount}
      publisher={el.volumeInfo.publisher}
      publishedDate={el.volumeInfo.publishedDate}
      imageLinks={el.volumeInfo.imageLinks}
      isbn={el.volumeInfo?.industryIdentifiers}
      id={el.id}
    />
  ));

  return <ul className='list__wrapper'>{result}</ul>;
};

export default BooksList;
