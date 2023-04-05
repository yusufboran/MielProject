import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { getLocationsList } from "../../db";
import mapStyles from "./mapStyles";
import parse from "html-react-parser";
import pin from "../../assets/img/pin.png";

const mapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
  styles: mapStyles,
  maxZoom: 16,
  streetViewControl: false,
};

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    getLocationsList(setItems);
  }, []);

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
      {items.map((item) => (
        <Marker
          key={item.id}
          position={{
            lat: Number(item["location"].slice(1, -1).split(",")[0]),
            lng: Number(item["location"].slice(1, -1).split(",")[1]),
          }}
          onMouseOver={() => handleActiveMarker(item.id)}
          onClick={() => handleActiveMarker(item.id)}
          icon={{
            url: pin,
            scaledSize: new window.google.maps.Size(60, 60),
          }}
        >
          {activeMarker === item.id ? (
            <InfoWindow
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 7px 1px rgba(0,0,0,0.3)",
                fontSize: "13px",
                fontWeight: "300",
                padding: "12px",
              }}
              onCloseClick={() => setActiveMarker(null)}
            >
              <div style={{ marginLeft: "6px" }}>
                <div className="team-mem-item">
                  <figure className="member-pic">
                    <img
                      src={item.imgUrl}
                      alt="Girl in a jacket"
                      width="500"
                      height="600"
                    />
                  </figure>
                  <div className="member-info">
                    <h5>{item.title}</h5>
                    <p>
                      <a href={"tel:" + item.phone}> {item.phone}</a>
                    </p>
                    <span className="designation">{parse(item.address)}</span>
                  </div>
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
export default function Main() {
  const api = "AIzaSyAi9t9QLLtA1qArKTK_mE3wSUFSYZxQiok"; //google developer api key AIzaSyAzo9Xzk5QwuAixqF8Kxdxp1zgMfL2DtKA
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
