import BooksGrid from "./BooksGrid";

const Bookshelf = ({books, shelf, onChangeShelf}) => {
    const booksOnShelf = books.filter(book => book.shelf === shelf.value);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={booksOnShelf} onChangeShelf={onChangeShelf} />
            </div>
        </div>
    );
};

export default Bookshelf;