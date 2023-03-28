import Book from './Book';

const Shelf = ({ books, heading, shelf, onBookChangeShelf }) => {

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

              {books.map((book) => {
                  if (book.shelf === shelf)
                      return (
                          <li key={book.id}>
                          <Book
                            id={book.id}
                            title={book.title}
                            authors={book.authors}
                            thumbnailUrl={book.imageLinks.thumbnail}
                            shelf={book.shelf}
                            onBookChangeShelf={onBookChangeShelf}
                          />
                        </li>
                      );
              })}

          </ol>
        </div>
      </div>
    );

}

export default Shelf;