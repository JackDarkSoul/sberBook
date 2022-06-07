import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HEADER_HIDE } from '../../redux/actions/actions';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className='header__wrapper'>
      <Link to='/addBook'>
        <button
          className='link'
          onClick={() => dispatch({ type: HEADER_HIDE, payload: true })}
        >
          Add Book
        </button>
      </Link>
    </div>
  );
};

export default Header;
