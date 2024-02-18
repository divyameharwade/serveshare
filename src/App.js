import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import AddOpportunity from "./components/forms/AddOpportunity";
import Filter from "./components/forms/filter";
import VolunteerPage from "./components/VolunteerPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/volunteerpage" element={<VolunteerPage />} />
          <Route
            path="/newVolunteerRegister"
            element={<VolunteerRegistrationFrom />}
          />
          <Route path="/addOpportunity" element={<AddOpportunity />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/addOpportunity" element={<AddOpportunity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
