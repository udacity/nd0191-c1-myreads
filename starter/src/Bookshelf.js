import Book from "./Book";

const Bookshelf = ({books, onMoveBook, category}) => {

    return (
        <div className="bookshelf">
            <div className="bookshelf-title">{category}</div>
            <ol className="books-grid">
                {books.map((book) =>
                        <li key={book.id}>
                            <Book book={book} onMoveBook={onMoveBook}/>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default Bookshelf;
