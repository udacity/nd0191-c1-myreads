import { createContext, useContext, useEffect, useState } from "react";

//Create Context
export const ShelfContext = createContext(null);
// DIY Provider
export const ShelfProvider = ({ children }) => {
  const IntState = JSON.parse(localStorage.getItem("myReadsStorage")) || {
    read: [],
    wantToRead: [],
    currentlyReading: [],
  };
  const [state, setState] = useState(IntState);
  const api = {
    stateShelfUpdate: (data) => setState(data),
  };

  useEffect(() => {
    localStorage.setItem("myReadsStorage", JSON.stringify(state));
  }, [state]);

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
