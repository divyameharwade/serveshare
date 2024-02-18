import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VolunteerRegistrationFrom from "./components/forms/VolunteerRegistrationForm";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Feed from "./components/Feed";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Volunteer" element={<Cards />} />
        <Route path="/Feed" element={<Feed />} />
        <Route
          path="/newVolunteerRegister"
          element={<VolunteerRegistrationFrom />}
        />
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
