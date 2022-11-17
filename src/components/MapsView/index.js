import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import markers from "./data.json";
import mapStyles from "./mapStyles";

const mapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
  styles: mapStyles,
  maxZoom: 16,
  streetViewControl: false,
};

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setActiveMarker(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      onClick={() => setActiveMarker(null)}
      defaultZoom={10}
      options={mapOptions}
      defaultCenter={{ lat: 41.06018769153425, lng: 29.04100341843807 }}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onMouseOver={() => handleActiveMarker(id)}
          icon={{
            url: "https://cdn-icons-png.flaticon.com/512/1599/1599834.png",
            scaledSize: new window.google.maps.Size(60, 60),
          }}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
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
