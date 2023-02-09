import Book from "./Book";

const Shelf = ({ shelfObject, booksList }) => {

  const shelfBooks = booksList.filter((book)=>(
    book.shelf === shelfObject.name
  ));

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfObject.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks?.map((book) => (
              <Book key = {book.id} bookObject={book} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
