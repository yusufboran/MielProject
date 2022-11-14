import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";
import mapStyles from "./mapStyles";

const mapOptions = {
  fullscreenControl: false,
  styles: mapStyles,
  maxZoom: 16,
  streetViewControl: false,
};
const mapCenter = { lat: 41.0317770592092, lng: 28.99349299788066 };
const mapMarkers = [{ lat: 41.10258037929121, lng: 28.985153539002187 }];

const index = () => {
  return (
    <div style={{ width: "100%", height: "88vh" }}>
      <GoogleMapReact
        defaultZoom={10}
        defaultCenter={mapCenter}
        options={mapOptions}
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: "AIzaSyCICTNwA7DuGhVVvJLLWAVQdygh8ipdRVA" }}
      >
        {mapMarkers.map((marker) => {
          return <Marker lat={marker.lat} lng={marker.lng} />;
        })}
      </GoogleMapReact>
    </div>
  );
};


export default index;
