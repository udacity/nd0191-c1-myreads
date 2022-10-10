import Book from "./Book";

const Bookshelf = ({shelfName, collection}) => {

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            collection.map((book) => (<Book bookData={book}/> ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Bookshelf;