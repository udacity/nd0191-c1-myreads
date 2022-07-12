import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import * as BookApi from "./BooksAPI";
import HomeScreen from "./Screens/HomeScreen";
import SearchPage from "./Component/SearchPage";

function App() {
  const [allBooks, setAllBooks] = React.useState([]);

  React.useEffect(() => {
    const getBooks = async () => {
      const res = await BookApi.getAll();
      setAllBooks(res);
    };
    getBooks();
  });

  return (
    <Routes>
      <Route path='/' element={<HomeScreen allBooks={allBooks} />} />
      <Route path='/search' element={<SearchPage booklist={allBooks} />} />
    </Routes>
  );
}

export default App;
