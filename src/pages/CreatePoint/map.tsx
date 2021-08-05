import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import { LeafletMouseEvent } from "leaflet";

const MapLeaft = () => { 
    function LocationMarker() {
        const [position, setPosition] = useState<[number, number]>([0,0]);
        const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0]);
    
        const map = useMapEvents({
            click: (event: LeafletMouseEvent) => {
                if(selectedPosition[0] === 0 ){
                    map.locate();
                }     
                if(position[0] !== 0)   
                    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
            },
            locationfound(e) {
                if(position[0] === 0){
                    setPosition([e.latlng.lat, e.latlng.lng]);
                    map.flyTo(e.latlng, map.getZoom());
                }
            },
        })
        
        return (
            <Marker position={selectedPosition}>
                <Popup>Agora você está aqui </Popup>
            </Marker>
        )
    }
    
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

