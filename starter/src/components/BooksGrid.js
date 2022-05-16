import Book from "./Book";

const BooksGrid = ({books, onChangeShelf}) => {
    return ( 
        <ol className="books-grid">
            {books.map((book) => (
                <Book key={book.id} book={book} shelfValue={book.shelf ? book.shelf : 'none'} onChangeShelf={onChangeShelf} />
            ))}
        </ol>
    );
};

export default BooksGrid;