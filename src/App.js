import Home from "./components/Home";
import AddOpportunity from "./components/forms/AddOpportunity";
import Filter from "./components/forms/filter";
import VolunteerPage from "./components/VolunteerPage";
import Cards from "./components/Cards";
import VolunteerRegistrationFrom from "./components/forms/VolunteerRegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/volunteer" element={<Cards />} />
          <Route path="/volunteerpage" element={<VolunteerPage />} />
          <Route
            path="/newVolunteerRegister"
            element={<VolunteerRegistrationFrom />}
          />
          <Route path="/addOpportunity" element={<AddOpportunity />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
