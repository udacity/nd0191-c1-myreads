import BookTop from "./BookTop";

const Book = ({ book, updateBook }) => {
  return (
    <div className="book">
      <BookTop book={book} updateBook={updateBook} />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(", ")}</div>
    </div>
  );
};

export default Book;
