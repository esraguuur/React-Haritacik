import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { CircleMarker, MapConsumer, MapContainer, TileLayer, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import data from "./cities";


class App extends Component {
  render() {
    // var centerLat = (data.minLat + data.maxLat) / 2;
    // var distanceLat = data.maxLat - data.minLat;
    // var bufferLat = distanceLat * 0.05;
    // var centerLong = (data.minLong + data.maxLong) / 2;
    // var distanceLong = data.maxLong - data.minLong;
    // var bufferLong = distanceLong * 0.05;
    return (
      <div>
        <h3 style={{ textAlign: "center" }}> The district's population of Istanbul</h3>
        <MapContainer
          style={{ height: "880px", width: "100%" }}
          zoom={10}
          center={[41.00527, 28.97696]}
          bounds={[41.00527, 28.97696
            // [data.minLat - bufferLat, data.minLong - bufferLong],
            // [data.maxLat + bufferLat, data.maxLong + bufferLong]
          ]
          }
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][0], city["coordinates"][1]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city["name"] + ": " + "Population" + " " + city["population"]}</span>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div >

    );
  }
}

export default App;
