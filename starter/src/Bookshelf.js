import Book from "./Book";

const Bookshelf = ({books, onMoveBook, category}) => {

    const shelf = () => {
        if (category === 'Want to Read') return 'wantToRead';
        if (category === 'Currently Reading') return 'currentlyReading';
        if (category === 'Read') return 'read';
    }

    const booksOnBookshelf = books.filter(book => book.shelf === shelf());

    return (
        <div className="bookshelf">
            <h1 className="bookshelf-title">{category}</h1>
            {
                console.log(`Books size: ${booksOnBookshelf.length}`)
            }
            <div hidden={booksOnBookshelf.length !== 0}>No books found</div>
            <ol className="books-grid">
                {booksOnBookshelf.map((book) =>
                        <li key={book.id}>
                            <Book book={book} onMoveBook={onMoveBook}/>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default Bookshelf;
