import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";

const BookList = ({books, updateBook}) => {

  //const [showSearchPage, setShowSearchpage] = useState(false);

  //let navigate = useNavigate();

  //const [books, setBooks] = useState([]);

  const showingShelves = [...new Set(books.map(b => b.shelf))];

  console.log(showingShelves);

  console.log(books);
    
  return (

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
  );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired
};

export default BookList;