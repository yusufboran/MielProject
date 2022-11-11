import React from "react";
import GoogleMapReact from "google-map-react";
import supercluster from "points-cluster";
import Marker from "../Marker";
import ClusterMarker from "../ClusterMarker/index";
import mapStyles from "./mapStyles";
import { markersData } from "../fakeData";

const mapCenter = { lat: 41.0317770592092, lng: 28.99349299788066 };

const mapOptions = {
  fullscreenControl: false,
  styles: mapStyles,
  maxZoom: 19,
};

export class GoogleMap extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    clusters: [],
  };

  getClusters = () => {
    const clusters = supercluster(markersData, {
      minZoom: 0,
      maxZoom: 16,
      radius: 60,
    });

    return clusters(this.state.mapOptions);
  };

  createClusters = (props) => {
    this.setState({
      clusters: this.state.mapOptions.bounds
        ? this.getClusters(props).map(({ wx, wy, numPoints, points }) => ({
            lat: wy,
            lng: wx,
            numPoints,
            id: `${numPoints}_${points[0].id}`,
            points,
          }))
        : [],
    });
  };

  handleMapChange = ({ center, zoom, bounds }) => {
    this.setState(
      {
        mapOptions: {
          center,
          zoom,
          bounds,
        },
      },
      () => {
        this.createClusters(this.props);
      }
    );
  };

  render() {
    return (
      <div style={{ width: "100%", height: "88vh" }}>
        <GoogleMapReact
          defaultZoom={10}
          defaultCenter={mapCenter}
          options={mapOptions}
          onChange={this.handleMapChange}
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: "AIzaSyCICTNwA7DuGhVVvJLLWAVQdygh8ipdRVA" }}
        >
          {this.state.clusters.map((item) => {
            if (item.numPoints === 1) {
              return (
                <Marker
                  key={item.id}
                  lat={item.points[0].lat}
                  lng={item.points[0].lng}
                />
              );
            }

            return (
              <ClusterMarker
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                points={item.points}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
