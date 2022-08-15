import PropTypes from "prop-types";
import Book from "./Book.js";

const Bookshelf = ({ title, books }) => {
  console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, idx) => (
            <li key={idx}>
              {console.log("bookshelf book", book)}
              <Book
                title={book.title}
                author={book.author}
                imgSrc={book.imgSrc}
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
