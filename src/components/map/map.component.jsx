import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import { instance } from "../../data/data";

const Map = () => {
  const position = [51.505, -0.09];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response;
      try {
        response = await instance.get("/countries");
      } catch (e) {
        console.log("Unable to retreive data");
        return;
      }
      setData(response.data);
    };

    getData();
  }, []);

  const renderData = data.map(({ country, countryInfo, cases }) => {
    const lat = countryInfo.lat;
    const long = countryInfo.long;

    return (
      <Marker key={country} position={[lat, long]}>
        <Popup>{country}</Popup>
      </Marker>
    );
  });

  console.log(renderData);

  // const renderMarkers = data.map((country, index) => (
  //   <Marker key={index} position={position}>
  //     <Popup>Your Location</Popup>
  //   </Marker>
  // ));

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
        {renderData}
      </MapContainer>
    </>
  );
};

export default Map;
