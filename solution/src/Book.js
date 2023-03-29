import PropTypes from 'prop-types';
import ShelfSelector from "./ShelfSelector";

const Book = ({ id, title, authors, thumbnailUrl, shelf, onBookChangeShelf }) => {
  
  const onShelfChange = (shelf) => {
    if (onBookChangeShelf){
      onBookChangeShelf(id, shelf);
    }
  }

  const formatAuthors = (authors) => {
    return (authors) ? authors.join(", ") : '';
  };

  return (
      <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnailUrl})`
          }}
        ></div>
          <ShelfSelector shelf={shelf} onShelfChange={onShelfChange} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{formatAuthors(authors)}</div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  thumbnailUrl: PropTypes.string,
  shelf: PropTypes.string,
  onBookChangeShelf: PropTypes.func
};

export default Book;