import { useState } from "react";

const BookShelfChanger = ({ book, updateBookShelfCallBack }) => {

  const [updatedBook, setUpdatedBook] = useState(book);

  const onShelfChange = (e) => {
    book.shelf = e.target.value
    console.log(book);
    setUpdatedBook(book);
    updateBookShelfCallBack(updatedBook)
  };

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={onShelfChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
