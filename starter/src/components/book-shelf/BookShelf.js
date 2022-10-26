import Book from "../book/Book.js";

const BookShelf = ({
  bookshelfTitle,
  readingLists,
  setreadingLists,
  bookShelfKey,
}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {readingLists[bookShelfKey].map((book) => (
            <Book
              book={book}
              key={book.id}
              readingLists={readingLists}
              setreadingLists={setreadingLists}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
