import "./App.css";
import React from "react";

import * as BookApi from "./BooksAPI";
import HomeScreen from "./Screens/HomeScreen";


function App() {
  const [allBooks, setAllBooks] = React.useState([]);

  React.useEffect(() => {
    const getBooks = async () => {
      const res = await BookApi.getAll();
      setAllBooks(res);
    };
    getBooks();
  }, []);

  return <HomeScreen allBooks={allBooks} />;
}

export default App;
