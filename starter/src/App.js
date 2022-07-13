import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import * as BookApi from "./BooksAPI";
import HomeScreen from "./Screens/HomeScreen";
import SearchPage from "./Component/SearchPage";

function App() {
  const [allBooks, setAllBooks] = React.useState([]);

  React.useEffect(() => {
    //Get All Books From API
    const getBooks = async () => {
      const res = await BookApi.getAll();
      setAllBooks(res);
    };
    getBooks();

    //Create Local Storage For Arrays
    if (localStorage.getItem("currentlyReading") == null)
      localStorage.setItem("currentlyReading", JSON.stringify([]));

    if (localStorage.getItem("wantToRead") == null)
      localStorage.setItem("wantToRead", JSON.stringify([]));

    if (localStorage.getItem("read") == null)
      localStorage.setItem("read", JSON.stringify([]));
  });

  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/search' element={<SearchPage booklist={allBooks} />} />
    </Routes>
  );
}

export default App;
