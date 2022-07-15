import "./App.css";
import { useState } from "react";
import SearchBooks from "./pages/SearchBooks";
import Home from "./pages/Home";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks setShowSearchpage={setShowSearchpage} />
      ) : (
        <Home setShowSearchpage={setShowSearchpage} />
      )}
    </div>
  );
}

export default App;
