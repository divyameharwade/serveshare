import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Feed from "./components/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./components/forms/filter";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/volunteer" element={<Cards />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/filter" element={<Filter />}
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
