const Book = ({book}) => {

    return (
        <div className="book">
            <img alt="cover" src={book.imageLinks.thumbnail}/>
            <div className="book-title">{book.title}</div>
            <div>{book.authors.map((author) => <div key={author} className="book-authors">{author}</div>)}</div>
        </div>
    );
}

export default Book;
