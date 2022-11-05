import BookShelf from '../book-shelf/BookShelf'

const Main = ({readingLists, setReadingLists, showSearchPage, setShowSearchpage}) => {
    return ( 
         <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                bookshelfTitle={"Currently Reading"}
                bookShelfKey={"currentlyReading"}
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
              <BookShelf
                bookshelfTitle={"Want to Read"}
                bookShelfKey={"wantToRead"}
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
              <BookShelf
                bookshelfTitle={"Read"}
                bookShelfKey={"read"}
                readingLists={readingLists}
                setReadingLists={setReadingLists}
              />
            </div>
          </div>
          <div className="open-search">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setShowSearchpage(!showSearchPage);
              }}
            >
              Add a book
            </a>
          </div>
        </div>
     );
}
 
export default Main;
