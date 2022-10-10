const Book = ({bookData}) => {

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${bookData.imageLinks.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookData.title}</div>
            <div className="book-authors">{bookData.authors[0]}</div>
        </div>
    )
}

export default Book;