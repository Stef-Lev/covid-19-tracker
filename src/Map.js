import React from 'react';
import './Map.css';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { showDataOnMap } from './util';

const Map = ({ countries, casesType, center, zoom }) => {

    const southWest = { lat: -89.98155760646617, lng: -180 }
    const northEast = { lat: 89.99346179538875, lng: 180 }
    const bounds = [southWest, northEast];

    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} minZoom={1} maxZoom={5} maxBoundsViscosity={0} maxBounds={bounds} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map;
