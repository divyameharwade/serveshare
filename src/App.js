import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VolunteerRegistrationFrom from "./components/forms/VolunteerRegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Feed from "./components/Feed";
import AddOpportunity from "./components/forms/AddOpportunity";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/volunteer" element={<Cards />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route
            path="/newVolunteerRegister"
            element={<VolunteerRegistrationFrom />}
          />
          <Route path="/addOpportunity" element={<AddOpportunity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
