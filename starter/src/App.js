import "./App.css";
import { useState } from "react";
import Search from "./Search";
import Books from "./Books";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const ChangeshowSearchPage = (value) => {
    setShowSearchpage(value);
  };
  return (
    <div className="app">
      {showSearchPage ? (
        <Search ChangeshowSearchPage={ChangeshowSearchPage} />
      ) : (
       <Books ChangeshowSearchPage={ChangeshowSearchPage} />
      )}
    </div>
  );
}

export default App;
