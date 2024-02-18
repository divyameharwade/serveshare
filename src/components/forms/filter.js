import React, { useState, useEffect } from 'react';
import { database } from "../../config/firebase";
import { ref, onValue } from 'firebase/database';

const Filter = ({ currentUserUid }) => {
  const [ngos, setNgos] = useState([]);
  const [userLocation, setUserLocation] = useState({});
  const [filteredNgos, setFilteredNgos] = useState([]);
  const [radius, setRadius] = useState(20);

  // Function to fetch user and NGOs location from Firebase
//   useEffect(() => {
//     // Fetch current user's location
//     const userRef = ref(database, `users/${currentUserUid}`);
//     onValue(userRef, (snapshot) => {
//       const userData = snapshot.val();
//       if (userData) {
//         console.log(userData, userData.latitude, userData.longitude);
//         setUserLocation({ lat: userData.latitude, lng: userData.longitude });
//         // setUserLocation({ lat: 37.2490412, lng: -121.8315739 });

//       }
//     });

//     // Fetch NGOs locations
//     const ngosRef = ref(database, 'ngo');
//     onValue(ngosRef, (snapshot) => {
//       const ngoData = snapshot.val();
//       if (ngoData) {
//         console.log("ngo data");
//         setNgos(Object.values(ngoData));
//       }
//       console.log(ngoData);

//     });
//   }, [currentUserUid]);


  // Function to call Google Maps API and filter NGOs
  const filterNgosByRadius = async () => {
    const origins = [`${userLocation.lat},${userLocation.lng}`];
    const destinations = ngos.map(ngo => `${ngo.latitude},${ngo.longitude}`);

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: origins,
        destinations: destinations,
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status === 'OK') {
          const results = response.rows[0].elements;
          const filtered = ngos.filter((ngo, index) => {
            console.log("checking ngos ",ngo);
            // Google Maps API returns distance in meters, convert to miles
            const distanceInMeters = results[index].distance.value;
            const distanceInMiles = distanceInMeters / 1609.344;
            console.log("distanceInMeters ", distanceInMeters);
            console.log("distanceInMiles ", distanceInMiles);

            return distanceInMiles <= radius;
          });
          setFilteredNgos(filtered);
          console.log(filtered);
        } else {
          console.error('Error was: ' + status);
        }
      }
    );
  };

  // Call filter function whenever the radius changes
  useEffect(() => {
    console.log(radius,userLocation.lat,userLocation.lng);
    if (radius > 0 && userLocation.lat && userLocation.lng) {
        console.log("filterNgosByRadius being called")
      filterNgosByRadius();
    }
  }, [radius, userLocation, ngos]);

  const handleChange = (event) => {
    event.preventDefault();
    const selectedRadius = Number(event.target.value);
    setRadius(selectedRadius);

    const userRef = ref(database, `users/5ngV0PuYbzagm3BItBGi2L4jlfT2`);
    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      console.log(userData);
      if (userData) {
        console.log(userData, userData.latitude, userData.longitude);
        setUserLocation({ lat: userData.latitude, lng: userData.longitude });
        // setUserLocation({ lat: 37.2490412, lng: -121.8315739 });
      }
    });

    // Fetch NGOs locations
    const ngosRef = ref(database, 'ngo');
    onValue(ngosRef, (snapshot) => {
      const ngoData = snapshot.val();
      if (ngoData) {
        console.log("ngo data");
        setNgos(Object.values(ngoData));
      }
      console.log(ngoData);

    });
  }

  return (
    <div className='pt-36'>
      <select value={radius} onChange={handleChange}>
        <option value="">Select radius</option>
        <option value="1">1mi</option>
        <option value="10">10mi</option>
        <option value="20">20mi</option>
      </select>
      <p>Selected Value: {radius}</p>
      <h1> radius {radius}</h1>
      {filteredNgos.length > 0 ? (
        <ul>
          {filteredNgos.map((ngo, index) => (
            <li key={index}>{ngo.name}</li>
          ))}
        </ul>
      ) : (
        <p>No NGOs found within the selected radius.</p>
      )}
    </div>
  );
};

export default Filter;
