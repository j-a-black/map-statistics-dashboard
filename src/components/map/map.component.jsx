import React, { useState, useEffect, useRef } from "react";

import { addCommaToValue } from "../../utils";

import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Circle,
  useMap,
  useMapEvent,
  useMapEvents,
  CircleMarker,
} from "react-leaflet";

const Map = ({ countriesData, countryItemSelected }) => {
  // const position = [51.505, -0.09];

  const [position, setPosition] = useState([0, 0]);
  const animateRef = useRef(true);

  function SetViewOnClick({ animateRef }) {
    const map = useMapEvent("click", (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      });
    });

    return null;
  }

  const MoveToMarker = () => {
    const map = useMapEvent();
  };

  const renderAllCountriesNumOfCases = countriesData.map(
    ({ country, countryInfo, cases }) => {
      const lat = countryInfo.lat;
      const long = countryInfo.long;
      const countryCases = addCommaToValue(cases);

      return (
        // <Marker key={country} position={[lat, long]}>
        //   <Popup>
        //     {country} <br />
        //     {`Cases: ${countryCases}`}
        //   </Popup>
        // </Marker>
        <CircleMarker
          key={country}
          center={[lat, long]}
          radius={4}
          color="red"
          fillColor="red"
          fillOpacity={1}
        >
          <Popup>
            {country} <br />
            {`Cases: ${countryCases}`}
          </Popup>
        </CircleMarker>
      );
    }
  );

  useEffect(() => {
    if (countryItemSelected) {
      for (let i = 0; i < countriesData.length; i++) {
        if (countriesData[i].country === countryItemSelected) {
          const lat = countriesData[i].countryInfo.lat;
          const long = countriesData[i].countryInfo.long;
          setPosition([lat, long]);
        }
      }
    }
  }, [countryItemSelected]);

  // console.log(position);

  return (
    <MapContainer
      center={position}
      zoom={2}
      touchZoom={true}
      scrollWheelZoom={false}
      flyTo={countryItemSelected ? position : null}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderAllCountriesNumOfCases}
    </MapContainer>
  );
};

export default Map;
