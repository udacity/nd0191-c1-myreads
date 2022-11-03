import { useState, useEffect } from "react";
import { update } from "../../BooksAPI";

const Book = ({ book, readingLists, setReadingLists }) => {
  const title = book.title;
  const url = book.imageLinks?.thumbnail;
  const authors = book.authors?.join(", ");

  const [chooseShelf, setChooseSelf] = useState("none");

  useEffect(() => {
    updateChooseSelf();
  });

  const updateChooseSelf = () => {
    if (
      readingLists.currentlyReading.find(
        (bookInList) => bookInList.id === book.id
      )
    ) {
      setChooseSelf("currentlyReading");
    } else if (
      readingLists.wantToRead.find((bookInList) => bookInList.id === book.id)
    ) {
      setChooseSelf("wantToRead");
    } else if (
      readingLists.read.find((bookInList) => bookInList.id === book.id)
    ) {
      setChooseSelf("read");
    }
  };

  const pushToList = (key) => {
    console.log("book", book);
    let newReadlingList = { ...readingLists };
    if (key !== "none") {
      newReadlingList[key].push(book);
    }
    update(book, key);

    return newReadlingList;
  };

  const deleteFromList = (key, index) => {
    let newReadlingList = { ...readingLists };
    newReadlingList[key].splice(index, 1);
    return newReadlingList;
  };

  const setInShelf = (e) => {
    setChooseSelf(e.target.value);

    if (
      readingLists.currentlyReading.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          setReadingLists(deleteFromList("currentlyReading", index));
          return true;
        }
        return false;
      })
    ) {
    } else if (
      readingLists.wantToRead.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          setReadingLists(deleteFromList("wantToRead", index));
          return true;
        }
        return false;
      })
    ) {
    } else if (
      readingLists.read.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          setReadingLists(deleteFromList("read", index));
          return true;
        }
        return false;
      })
    ) {
    }
    // if (e.target.value !== "none") {
    setReadingLists(pushToList(e.target.value));
    // }
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${url})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={setInShelf} value={chooseShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">Remove from MyReads</option>
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
