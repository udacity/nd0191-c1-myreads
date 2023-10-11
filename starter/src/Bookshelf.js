import Book from "./Book";

const Bookshelf = ({books, onMoveBook, onAddBook, category}) => {

    return (
        <div className="bookshelf">
            <h1 className="bookshelf-title">{category}</h1>
            {
                console.log(`Books size: ${books.length}`)
            }
            <div hidden={books.length !== 0}>No books found</div>
            <ol className="books-grid">
                {books.map((book) =>
                        <li key={book.id}>
                            <Book book={book} onMoveBook={onMoveBook} onAddBook={onAddBook}/>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default Bookshelf;
