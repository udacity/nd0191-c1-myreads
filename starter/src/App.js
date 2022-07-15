import "./App.css";
import BookAdd from "./pages/BookAdd";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ShelfProvider } from "./context/ShelfContext";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <ShelfProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-contact" element={<BookAdd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ShelfProvider>
  );
}

export default App;
