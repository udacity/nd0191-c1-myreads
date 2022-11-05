import Book from "../book/Book.js";
import { BooksContext } from "../../BooksContext";
import { useContext } from "react";

const BookShelf = ({ bookshelfTitle, bookShelfKey }) => {
  const { readingLists } = useContext(BooksContext);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {readingLists[bookShelfKey].map((book) => (
            <Book book={book} key={book.id} readingLists={readingLists} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
