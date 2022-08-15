import PropTypes from "prop-types";
import Book from "./Book.js";

const Bookshelf = ({ title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                title={book.title}
                authors={book.authors}
                imgSrc={book.imageLinks.thumbnail}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default Bookshelf;
