import ShelfSelector from "./ShelfSelector";

const Book = ({ id, title, authors, thumbnailUrl, shelf, onBookChangeShelf }) => {
  
  const onShelfChange = (shelf) => {
    if (onBookChangeShelf){
      onBookChangeShelf(id, shelf);
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
            backgroundImage: `url(${thumbnailUrl})`
          }}
        ></div>
          <ShelfSelector shelf={shelf} onShelfChange={onShelfChange} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;