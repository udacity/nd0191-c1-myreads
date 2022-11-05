import React from "react";
import { getAll } from "./BooksAPI";
import { useState, useEffect, createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({children} ) => {
  const initialData = { currentlyReading: [], wantToRead: [], read: [] };
  const [readingLists, setReadingLists] = useState(initialData);

  useEffect(() => {
    getAll().then((books) => {
      let newReadlingLists = { currentlyReading: [], wantToRead: [], read: [] };
      books.map((book) => newReadlingLists[book.shelf].push(book));
      setReadingLists(newReadlingLists);
    });
  }, []);

  const value={readingLists, setReadingLists}

  return <BooksContext.Provider value={value}>
    {children}
  </BooksContext.Provider>;
};
