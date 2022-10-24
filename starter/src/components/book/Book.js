import { useState, useEffect } from "react"

const Book = ({ book, currentlyReadingList, setCurrentlyReadingList }) => {
    
  const title = book.title;
  const url = book.imageLinks.thumbnail;
  const authors = book.authors?.join(", ");

  const [chooseShelf, setChooseSelf] = useState("none")

  const setInShelf = (e)=> {
    console.log("e",e.target.value);
    setChooseSelf(e.target.value)
    currentlyReadingList.push(book)
    console.log(currentlyReadingList);
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:  `url(${url})` ,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select  onChange={setInShelf}
            value={chooseShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

export default Book;
