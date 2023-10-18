const Book = ({book, onMoveBook}) => {

    const moveBookToCategory = (event) => {
        console.log(`Book: ` + book.title + ` is moved to ` + event.target.value);
        onMoveBook(book, event.target.value);
    }

    return (
        <div className="book">
            <form>
                <img className="book-cover" alt="cover" src={book.imageLinks?.thumbnail}/>
                <div className="book-shelf-changer">
                    <select onChange={moveBookToCategory} name="shelf" id="shelf" value={book.shelf}>
                        <option value="select" disabled>Move to...</option>
                        <option value="currentlyReading">Currenty Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                <div className="book-title">{book.title}</div>
                <div>{book.authors?.map((author) => <div key={author} className="book-authors">{author}</div>)}</div>
            </form>
        </div>
    );
}

export default Book;
