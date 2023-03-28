import BookShelfSelector from "./BookShelfSelector";

const Book = ({ book, onBookChange }) => {
  
  const onShelfChange = (shelf) => {
    if (onBookChange){
      onBookChange(book.id, shelf);
    }
  }

  return (
      <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}
        ></div>
          <BookShelfSelector shelf={book.shelf} onShelfChange={onShelfChange} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;