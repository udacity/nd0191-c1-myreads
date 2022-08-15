import { Route, Routes } from "react-router-dom";

import "../css/App.css";
import BookLibrary from "./BookLibrary.js";
import SearchBooks from "./SearchBooks.js";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<BookLibrary />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
