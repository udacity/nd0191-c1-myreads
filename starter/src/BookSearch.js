import react from 'react';
import { PropTypes } from "prop-types";
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../data/BooksAPI';

const BookSearch = (props) => {
    BookSearch.PropTypes = {
        updateShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }
    const [query, setQuery] = useState('');
    const [searchedBooks, setsearchedBooks] = useState([]);



const updateQuery = (inputquery) => {
    if (inputquery!=="") {
        setQuery(inputquery);
    }
    else{
        alert("Please enter a search term");
    }

      return <div className="search-books">
        <div className="search-books-bar">
          
            <Link className="close-search" to='/'          >
            Close
         </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(event) => updateQuery(event.target.value)}

            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks &&
            searchedBooks.length > 0 &&
            searchedBooks.map((book) =>
            (
            <Book
            Key={book.id}
            onUpdateShelf ={Props.onUpdateShelf}
            bookItem={book}
            />
            ))}

          </ol>
        </div>
      </div>
 }}

 export default BookSearch;