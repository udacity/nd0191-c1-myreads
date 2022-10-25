import Book from "../book/Book.js";

const BookShelf = ({
  bookshelfTitle,
  readingList,
  readingLists,
  setreadingLists,
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
