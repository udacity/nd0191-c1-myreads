import SelectShelf from "./SelectShelf";

const Book = (book) => {
    return (
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage:
              `url(${book.coverImgUrl})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <SelectShelf/>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.auther}</div>
      </div>
    );
  };
  export default Book;
  