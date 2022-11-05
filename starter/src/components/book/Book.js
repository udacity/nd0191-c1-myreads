import { useState, useEffect } from "react";
import { update } from "../../BooksAPI";
import { BooksContext } from "../../BooksContext";
import { useContext } from "react";

const Book = ({ book }) => {
  const { readingLists, setReadingLists } = useContext(BooksContext);

  const title = book.title;
  const url = book.imageLinks?.thumbnail;
  const authors = book.authors?.join(", ");
  const [chooseShelf, setChooseSelf] = useState("none");

  useEffect(() => {
    updateChooseSelf(); // checking if book exist in one of the lists - if so, update chooslist variable
  });

  const updateChooseSelf = () => {
    for (const list in readingLists) {
      readingLists[list].find((bookInList) => {
        if (bookInList.id === book.id) {
          setChooseSelf(list);
          return true;
        }
        return false;
      });
    }
  };

  const pushToList = (key) => {
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
    //in this point book exist in list, or in the search results

    if (chooseShelf !== "none") {
      //in this point book exist in list and I need to remove the book from the list
      readingLists[chooseShelf].find((bookInList, index) => {
        if (bookInList.id === book.id) {
          setReadingLists(deleteFromList(chooseShelf, index));
          return true;
        }
        return false;
      });
    }
    setChooseSelf(e.target.value); //update chooseShelf variable to the choosen shelf

    setReadingLists(pushToList(e.target.value)); // push the book to the new list and update readingLists
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
