import ChangeBookshelf from "./ChangeBookshelf";
import BookDetailsModal from "./BookDetailsModal";

const Book = ({ book, shelfValue, onChangeShelf}) => {
    const defaultThumbnail = "../icons/default-thumbnail.svg";
    const bookCoverImage = book.imageLinks ?  book.imageLinks.thumbnail : defaultThumbnail;

    return (
        <li>
            <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${bookCoverImage})`,
                }}
                ></div>
                <ChangeBookshelf book={book} shelfValue={shelfValue} onChangeShelf={onChangeShelf} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : "Unknown Author"}</div>
            </div>
            <BookDetailsModal book={book}/>
        </li>
  );
};

export default Book;