import Book from "./Book";

const Bookshelf = ({books, category}) => {

    const isShelf = (book) => {
        return (book.shelf === 'currentlyReading' && category === 'Currently Reading')
            || (book.shelf === 'read' && category === 'Read')
            || (book.shelf === 'wantToRead' && category === 'Want to Read');
    }

    return (
        <div className="bookshelf">
            <div className="bookshelf-title">{category}</div>
            <ol className="books-grid">
                {books
                    .filter((book) => isShelf(book))
                    .map((book) =>
                        <li key={book.id}>
                            <Book book={book}/>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default Bookshelf;
