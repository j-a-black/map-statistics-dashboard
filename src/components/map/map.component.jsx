import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import axios from "axios";
// import { instance } from "../../data/data";

const Map = () => {
  const position = [51.505, -0.09];
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  const countries = axios.get("https://disease.sh/v3/covid-19/countries");
  const all = axios.get("https://disease.sh/v3/covid-19/all");

  useEffect(() => {
    const getData = async () => {
      await axios
        .all([countries, all])
        .then(
          axios.spread((...responses) => {
            setCountriesData(responses[0].data);
            setGlobalData(responses[1].data);
          })
        )
        .catch((err) => console.error(err));
    };

    getData();
  }, []);

  console.log(countriesData);
  console.log(globalData);

  const renderAllCountriesNumOfCases = countriesData.map(
    ({ country, countryInfo, cases }) => {
      const lat = countryInfo.lat;
      const long = countryInfo.long;
      const casesWithCommas = cases.toLocaleString("en-US");

      return (
        <Marker key={country} position={[lat, long]}>
          <Popup>
            {country} <br />
            {` Reported Cases: ${casesWithCommas}`}
          </Popup>
        </Marker>
      );
    }
  );

  return (
    <>
      <MapContainer
        center={position}
        zoom={2}
        touchZoom={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderAllCountriesNumOfCases}
      </MapContainer>
    </>
  );
};

export default Map;
