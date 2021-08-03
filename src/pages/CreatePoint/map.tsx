import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const MapLeaft = () => { 
    return (
        <MapContainer center={[-20.4864927, -54.7696995]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-20.4864927, -54.7696995]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    )
};

export default MapLeaft;