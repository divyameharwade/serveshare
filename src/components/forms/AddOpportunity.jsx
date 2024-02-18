import { useState, useRef, useEffect } from "react";
import { auth, database } from "../../config/firebase";
import { ref, set, push } from "firebase/database";
import { useLoadScript } from "@react-google-maps/api";

export default function AddOpportunity() {
  const [opportunityName, setOpportunityName] = useState("");
  const [opportunityDuration, setOpportunityDuration] = useState("");
  const [opportunityDescription, setOpportunityDescription] = useState("");
  const [opportunityLocation, setOpportunityLocation] = useState("");
  //const [eventRequirements, setEventRequirements] = useState("");
  const [ngoName, setNgoName] = useState("");
  const [volunteeringPosition, setVolunteeringPosition] = useState("");
  const locationRef = useRef(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Replace with your Google Maps API Key
    libraries: ["places"], // To use the Places API
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newOpportunityRef = ref(database, "opportunities");
      const newOpportunity = push(newOpportunityRef);
      await set(newOpportunity, {
        name: opportunityName,
        duration: opportunityDuration,
        description: opportunityDescription,
        location: opportunityLocation,
        //requirements: eventRequirements,
        ngoName: ngoName,
        volunteeringPosition: volunteeringPosition,
        latitude: latitude,
        longitude: longitude,
      });
      alert("Event successfully added!");
      // Reset form fields
      setOpportunityName("");
      setOpportunityDuration("");
      setOpportunityDescription("");
      setOpportunityLocation("");
    } catch (err) {
      console.error("Failed to add event:", err);
      alert("Failed to add event. Please try again.");
    }
  };

  // const writeOpportunityData = (    opportunityName,
  //   opportunityDuration,
  //   opportunityDescription,
  //   opportunityLocation,
  //   ngoName,
  //   volunteeringPosition) => {
  //     set(ref(database, "ngos/"+))

  // }

  useEffect(() => {
    if (isLoaded && !loadError && locationRef.current) {
      // Initialize Google Places Autocomplete with the address input ref
      const autocomplete = new window.google.maps.places.Autocomplete(
        locationRef.current,
        { types: ["address"] } // This will only show address suggestions
      );
      // Specify which place data to return
      autocomplete.setFields([
        "address_components",
        "formatted_address",
        "geometry",
      ]);
      // Add a listener for the place_changed event
      autocomplete.addListener("place_changed", () => {
        const addressObject = autocomplete.getPlace();
        const formattedAddress = addressObject.formatted_address;
        setOpportunityLocation(formattedAddress); // Update the address state variable

        if (addressObject.geometry) {
          // Extract the latitude and longitude from the geometry object
          const lat = addressObject.geometry.location.lat();
          const lng = addressObject.geometry.location.lng();

          // Update your state with the new latitude and longitude
          setLatitude(lat);
          setLongitude(lng);
        } else {
          // Handle case when geometry is not available
          console.error("Place has no geometry");
        }
      });
    }
  }, [isLoaded, loadError, locationRef]);

  return (
    <div className="flex justify-center items-center h-full my-5">
      <form
        className="border border-gray-300 rounded-lg p-10 w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Add New Opportunity
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="opportunityName"
              className="block text-sm font-medium text-gray-700"
            >
              Opportunity Name
            </label>
            <input
              type="text"
              name="opportunityName"
              id="opportunityName"
              value={opportunityName}
              onChange={(e) => setOpportunityName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="ngoName"
              className="block text-sm font-medium text-gray-700"
            >
              NGO Name
            </label>
            <input
              type="text"
              name="ngoName"
              id="ngoName"
              value={ngoName}
              onChange={(e) => setNgoName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="eventDate"
              className="block text-sm font-medium text-gray-700"
            >
              Opportunity Duration
            </label>
            <input
              type="date"
              name="opportunityDuration"
              id="opportunityDuration"
              value={opportunityDuration}
              onChange={(e) => setOpportunityDuration(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="opportunityDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="opportunityDescription"
              id="opportunityDescription"
              value={opportunityDescription}
              onChange={(e) => setOpportunityDescription(e.target.value)}
              required
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="opportunityLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              ref={locationRef}
              name="opportunityLocation"
              id="opportunityLocation"
              value={opportunityLocation}
              onChange={(e) => setOpportunityLocation(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="volunteeringPosition"
              className="block text-sm font-medium text-gray-700"
            >
              Volunteering Position
            </label>
            <input
              type="text"
              name="volunteeringPosition"
              id="volunteeringPosition"
              value={volunteeringPosition}
              onChange={(e) => setVolunteeringPosition(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {/* <div>
            <label
              htmlFor="eventRequirements"
              className="block text-sm font-medium text-gray-700"
            >
              Requirements (Optional)
            </label>
            <textarea
              name="eventRequirements"
              id="eventRequirements"
              value={eventRequirements}
              onChange={(e) => setEventRequirements(e.target.value)}
              rows="2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div> */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
