import PropTypes from "prop-types";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const BookList = ({ books, updateBook }) => {

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
{/*             <div>
              {showingShelves.map((shelf) =>
              (
                <Shelf key={shelf}
                  name={shelf} books={books.filter((b) => b.shelf === shelf)} updateBook={updateBook}>
                </Shelf>
              ))};
            </div> */}
            <div>
                <Shelf key="1"
                  name="currentlyReading" shelfName="Currently Reading" books={books.filter((b) => b.shelf === "currentlyReading")} updateBook={updateBook}>
                </Shelf>
            </div>
            <div>
                <Shelf key="2"
                  name="WantToRead" shelfName="Want to Read" books={books.filter((b) => b.shelf === "wantToRead")} updateBook={updateBook}>
                </Shelf>
            </div>
            <div>
                <Shelf key="3"
                  name="read" shelfName="Read" books={books.filter((b) => b.shelf === "read")} updateBook={updateBook}>
                </Shelf>
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