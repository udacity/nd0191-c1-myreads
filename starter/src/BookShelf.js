
import BookGrid from "./BookGrid";

const BookShelf = ({ books, onShelfChanged, countChanged }) => {

    return (<div className="bookshelf-books">
        <BookGrid books={books} countChanged={countChanged} onShelfChanged={onShelfChanged} />
    </div>)
};

export default BookShelf;