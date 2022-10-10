import PropTypes from "prop-types";

const Book = ({ book, updateBook }) => {

  console.log("Thumbnail: " + (!book.imageLinks ? "" : book.imageLinks.thumbnail));

  return (
    <div>
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage:
                  `url(${!book.imageLinks ? "https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.JPG" : book.imageLinks.thumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event) => updateBook(book, event.target.value)}>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value={"currentlyReading"}>
                  Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className={"book-title"}>{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </div>
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;