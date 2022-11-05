import "./App.css";
// import { useContext } from "react";
import Search from "./components/search/Search.js";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BooksProvider } from "./BooksContext";
// import { BooksContext } from "./BooksContext";

function App() {
  // const {readingLists, setReadingLists} = useContext(BooksContext);

  return (
    <BooksProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BooksProvider>
  );
}

export default App;
