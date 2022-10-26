import { useState, useEffect } from "react";

const Book = ({ book, readingLists, setreadingLists }) => {
  const title = book.title;
  const url = book.imageLinks?.thumbnail;
  const authors = book.authors?.join(", ");

  const [chooseShelf, setChooseSelf] = useState("none");

  useEffect(() => {
    updateChooseSelf();
  }, []);

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
    let newReadlingList = { ...readingLists };
    newReadlingList[key].push(book);

    return newReadlingList;
  };

  const deleteFromList = (key, index) => {
    console.log("key", key);
    let newReadlingList = { ...readingLists };
    newReadlingList[key].splice(index, 1);
    console.log("newReadlingList", newReadlingList);
    return newReadlingList;
  };

  const setInShelf = (e) => {
    setChooseSelf(e.target.value);

    if (
      readingLists.currentlyReading.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          console.log("inside if");
          setreadingLists(deleteFromList("currentlyReading", index));
          return true;
        }
        return false;
      })
    ) {
    } else if (
      readingLists.wantToRead.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          setreadingLists(deleteFromList("wantToRead", index));
          return true;
        }
        return false;
      })
    ) {
    } else if (
      readingLists.read.find((bookInList, index) => {
        if (bookInList.id === book.id) {
          setreadingLists(deleteFromList("read", index));
          return true;
        }
        return false;
      })
    ) {
    }
    if (e.target.value !== "none") {
      console.log("here");
      setreadingLists(pushToList(e.target.value));
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
