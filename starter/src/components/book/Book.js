import { useState, useEffect } from "react";

const Book = ({ book, readingLists, setreadingLists }) => {
  const title = book.title;
  const url = book.imageLinks.thumbnail;
  const authors = book.authors?.join(", ");
  readingLists = JSON.parse(localStorage.getItem("readingLists"));

  console.log(" readingLists", readingLists);

  const [chooseShelf, setChooseSelf] = useState("none");

  useEffect(() => {
    console.log(" readingLists", readingLists);
    updateChooseSelf();
  }, []);

  const updateChooseSelf = () => {
    if (
      readingLists.currentlyReading.find(
        (bookInList) => bookInList.id === book.id
      )
    ) {
      console.log("in the list");
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

  const setInShelf = (e) => {
    setChooseSelf(e.target.value);

    if (
      e.target.value === "currentlyReading" &&
      readingLists.currentlyReading.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          readingLists.currentlyReading.splice(index, 1);

          return true;
        }
        return false;
      })
    ) {
    } else if (
      e.target.value === "wantToRead" &&
      readingLists.wantToRead.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          readingLists.wantToRead.splice(index, 1);
          return true;
        }
        return false;
      })
    ) {
    } else if (
      e.target.value === "read" &&
      readingLists.read.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          readingLists.read.splice(index, 1);
          return true;
        }
        return false;
      })
    )
      if (e.target.value !== "none") {
        readingLists[e.target.value].push(book);
        setreadingLists(readingLists);
        localStorage.setItem("readingLists", JSON.stringify(readingLists));
      }
    console.log(" readingLists", readingLists);
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
