import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import { instance } from "../../data/data";

const Map = () => {
  const position = [51.505, -0.09];
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await instance.get("/countries");
      setData(response.data);
    }

    getData();
  }, []);

  console.log(data);

  //   const renderMarkers = data.map((country, index) => (
  //     <Marker key={index} position={position}>
  //       <Popup>Your Location</Popup>
  //     </Marker>
  //   ));

  return (
    <MapContainer
      center={position}
      zoom={13}
      touchZoom={true}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
