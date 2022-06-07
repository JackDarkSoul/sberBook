const filterBooks = (arrayOfBooks) => {
  return arrayOfBooks.filter((el) => {
    if (el.volumeInfo.title.length > 30) return false;
    if (el.volumeInfo.authors.length) {
      for (let i of el.volumeInfo.authors) {
        if (i[0].length > 20 || i[1].length > 20) return false;
      }
    }
    if (!el.volumeInfo.pageCount || el.volumeInfo.pageCount > 10000) {
      return false;
    }

    return true;
  });
};

export default filterBooks;
