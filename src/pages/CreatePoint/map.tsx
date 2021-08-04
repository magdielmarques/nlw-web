import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"

function LocationMarker() {
    const [position, setPosition] = useState<[number, number]>([0,0]);

    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        locationfound(e) {
            setPosition([e.latlng.lat, e.latlng.lng]);
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    console.log(position)
    return (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const MapLeaft = () => { 
    return (
        <MapContainer 
            center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        
            <LocationMarker />
        </MapContainer>

    )
};

export default MapLeaft;

