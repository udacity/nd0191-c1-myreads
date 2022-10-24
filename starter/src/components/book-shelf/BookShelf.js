import Book from "../book/Book.js";

const BookShelf = ({
  bookshelfTitle,
  readingList,
  currentlyReadingList,
  setCurrentlyReadingList,
}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {readingList &&
            readingList.map((book) => (
              <Book
                book={book}
                key={book.id}
                currentlyReadingList={currentlyReadingList}
                setCurrentlyReadingList={setCurrentlyReadingList}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
