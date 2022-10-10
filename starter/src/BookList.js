import { useState} from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

const BookList = ({books, updateBook}) => {

  //const [showSearchPage, setShowSearchpage] = useState(false);

  //let navigate = useNavigate();

  //const [books, setBooks] = useState([]);

  const showingShelves = [...new Set(books.map(b => b.shelf))];

  console.log(showingShelves);

  console.log(books);
    
  return (
<div>
    <div>
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
        <ol>
        { showingShelves.map((shelf) => 
        ( 
          <li key={shelf}>       
                <Shelf key={shelf}
                    name={shelf} books={books.filter((b) => b.shelf === shelf)} updateBook={updateBook}>
                </Shelf>
          </li>
        ))}
        </ol>
    </div>
    <div className="open-search">
      <Link to="/search" className="add-contact">
          Search
      </Link>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired
};

export default BookList;