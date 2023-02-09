import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "./BooksAPI.js";

const Book = ({ bookObject, onBookShelfChange }) => {
  //update book callBack
  const updateBookShelfCallBack = (updatedBook) => {
    updateBookShelf(updatedBook, updatedBook.shelf);
  };

  //reflect update to the Server
  const updateBookShelf = async (book, newShelf) => {
    const res = await BooksAPI.update(book, newShelf);
    console.log(res);
    onBookShelfChange(true);
  };

  let imagePath;

  if(bookObject.imageLinks === undefined){
    imagePath="";
  }else{
    imagePath = bookObject.imageLinks.smallThumbnail;
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imagePath}")`,
          }}
        ></div>
        <BookShelfChanger
          book={bookObject}
          updateBookShelfCallBack={updateBookShelfCallBack}
        />
      </div>
      <div className="book-title">{bookObject.title}</div>
      <div className="book-authors">{bookObject.authors}</div>
    </div>
  );
};

export default Book;
