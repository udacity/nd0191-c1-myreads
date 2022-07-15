import "./App.css";
import { useState } from "react";
import SearchBooks from "./pages/SearchBooks";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-contact" element={<SearchBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // <div className="app">
    //   {showSearchPage ? (
    //     <SearchBooks setShowSearchpage={setShowSearchpage} />
    //   ) : (
    //     <Home setShowSearchpage={setShowSearchpage} />
    //   )}
    // </div>
  );
}

export default App;
