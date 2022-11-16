import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as parkData from "./data.json";
import mapStyles from "./mapStyles";

const mapOptions = {
  fullscreenControl: false,
  styles: mapStyles,
  maxZoom: 16,
  streetViewControl: false,
};

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      options={mapOptions}
      defaultCenter={{ lat: 41.06018769153425, lng: 29.04100341843807 }}
    >
      {parkData.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[0],
            lng: park.geometry.coordinates[1],
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            url: "https://cdn-icons-png.flaticon.com/512/1599/1599834.png",
            scaledSize: new window.google.maps.Size(60, 60),
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[0],
            lng: selectedPark.geometry.coordinates[1],
          }}
        >
          <div
            style={{
            }}
          >
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.ADRESS}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
export default function Main() {
  const api = "AIzaSyAzo9Xzk5QwuAixqF8Kxdxp1zgMfL2DtKA";
  return (
    <div style={{ width: "100%", height: "88vh" }}>
      <MapWrapped
        googleMapURL={
          `https://maps.googleapis.com/maps/api/js?key=` +
          api +
          `&v=3.exp&libraries=geometry,drawing,places}`
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
