import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Feed from "./components/Feed";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Volunteer" element={<Cards />}></Route>
        <Route path="/Feed" element={<Feed />}></Route>
      </Routes>
    </div>
  );
}

export default App;
