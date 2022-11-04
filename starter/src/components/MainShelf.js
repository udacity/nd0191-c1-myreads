import React from "react";
import Bookshelf from "./Bookshelf";

const Mainshelf = ({ books, updateShelf }) => {
  const shelfList = (list) => {
    const getShelfList =
      books && books.filter((seeList) => seeList.shelf === list);
    return getShelfList;
  };

  return (
    <div>
      <Bookshelf
        books={shelfList("currentlyReading")}
        title={"Currently Reading "}
        updateShelf={updateShelf}
      />

      <Bookshelf
        books={shelfList("wantToRead")}
        title={"want To Read"}
        updateShelf={updateShelf}
      />
      <Bookshelf
        books={shelfList("read")}
        title={" Read"}
        updateShelf={updateShelf}
      />
    </div>
  );
};

export default Mainshelf;
