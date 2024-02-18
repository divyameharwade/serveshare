import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import { auth, database } from "../../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, set, onValue } from "firebase/database";
import { useLoadScript } from "@react-google-maps/api";
import { setUserId } from "firebase/analytics";
import { useNavigate } from "react-router-dom";

export default function VolunteerRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const addressRef = useRef(null);
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Replace with your Google Maps API Key
    libraries: ["places"], // To use the Places API
  });

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      writeUserData(
        userCredential.user.uid,
        firstName,
        lastName,
        email,
        password,
        streetAddress,
        nationalId,
        latitude,
        longitude
      );
      navigate("/volunteer");
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const writeUserData = (
    userId,
    firstName,
    lastName,
    email,
    password,
    streetAddress,
    nationalId,
    lat,
    long
  ) => {
    set(ref(database, "users/" + userId), {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      streetAddress: streetAddress,
      nationalId: nationalId,
      latitude: lat,
      longitude: long,
    }).catch((error) => {
      console.error(error);
    });
  };

  const readUserData = (userId, callback) => {
    const userRef = ref(database, "users/" + userId);
    onValue(
      userRef,
      (snapshot) => {
        const data = snapshot.val();
        callback(data);
      },
      {
        onlyOnce: true,
      }
    );
  };

  useEffect(() => {
    if (isLoaded && !loadError && addressRef.current) {
      // Initialize Google Places Autocomplete with the address input ref
      const autocomplete = new window.google.maps.places.Autocomplete(
        addressRef.current,
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
        setStreetAddress(formattedAddress); // Update the address state variable

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
  }, [isLoaded, loadError, addressRef]);

  return (
    <div className="flex justify-center items-center h-full mb-5 mt-5">
      <form
        className="border border-gray-300 rounded-lg p-10 w-full max-w-lg"
        onSubmit={signIn}
      >
        <div className="w-full justify-center space-y-12">
          <div className=" border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Welcome to Serve Share
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Let's start with the Registration
            </p>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    ref={addressRef}
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Any National ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="id"
                    id="id"
                    autoComplete="off"
                    onChange={(e) => setNationalId(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
