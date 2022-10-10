import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ books, updateBook }) => {

  console.log(books)

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{books[0].shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.title}>
                <Book book={book} updateBook={updateBook}></Book>
              </li>
            ))};
          </ol>
        </div>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Shelf;
