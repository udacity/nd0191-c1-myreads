import BookShelfChanger from "./BookShelfChanger";

const BookTop = ({ book, updateBook }) => {
  return (
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${book.imageLinks.thumbnail}")`,
        }}
      ></div>
      <BookShelfChanger book={book} updateBook={updateBook} />
    </div>
  );
};

export default BookTop;
