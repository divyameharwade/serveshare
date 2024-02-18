import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VolunteerRegistrationFrom from "./components/forms/VolunteerRegistrationForm";
import Filter from "./components/forms/filter";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route
          path="/newVolunteerRegister"
          element={<VolunteerRegistrationFrom />}
        />
        <Route
          path="/filter"
          element={<Filter />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
