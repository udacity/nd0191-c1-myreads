import { createContext, useContext, useState } from "react";

//Create Context
export const ShelfContext = createContext(null);
// DIY Provider
export const ShelfProvider = ({ children }) => {
  const IntState = {
    read: new Set(),
    wantToRead: new Set(),
    currentlyReading: new Set(),
  };
  const [state, setState] = useState(IntState);
  const api = {
    addTo: (target = "read", bookId) =>
      setState((prev) => {
        console.log(
          "target :   " + target + " bookId   : " + JSON.stringify(bookId)
        );
        let next = { ...prev };
        //  fist rest bookId shelf
        console.log("reads :", prev.read.has(bookId));
        console.log("currentlyReading :", prev.currentlyReading.has(bookId));
        console.log("wantToRead", prev.wantToRead.has(bookId));

        if (
          prev.read.has(bookId) ||
          prev.currentlyReading.has(bookId) ||
          prev.wantToRead.has(bookId)
        ) {
          console.log("here");
          next.read.has(bookId) && next.read.delete(bookId);
          next.currentlyReading.has(bookId) &&
            next.currentlyReading.delete(bookId);
          next.wantToRead.has(bookId) && next.wantToRead.delete(bookId);
        }
        next[target]?.add(bookId);
        return { ...prev, ...next };
      }),
  };

  return (
    <ShelfContext.Provider value={{ state, ...api }}>
      {children}
    </ShelfContext.Provider>
  );
};

// custom hook
export const useShelf = () => {
  const ctx = useContext(ShelfContext);
  if (!ctx) {
    throw new Error("Something went wrong !");
  }
  return { ...ctx };
};
