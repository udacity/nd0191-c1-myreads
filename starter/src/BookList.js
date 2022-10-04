import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";

function BookList({ books, setBooks }) {

  //const [showSearchPage, setShowSearchpage] = useState(false);

  //let navigate = useNavigate();

  //const [books, setBooks] = useState([]);

  const showingShelves = [...new Set(books.map(b => b.shelf))];
    
  return (
    <div>
        <ol>
        { showingShelves.map((shelf) => 
        (        
                <li key={shelf} className="contact-list-item">
                    {shelf}
                </li>
        ))}
        </ol>
    </div>
  );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired
};

export default BookList;