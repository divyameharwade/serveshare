import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Feed from "./components/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/volunteer" element={<Cards />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
