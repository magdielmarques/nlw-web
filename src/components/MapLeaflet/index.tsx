import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"

interface Props {
    onClick: (name:[number,number]) => void; 
}

const MapLeaflet: React.FC<Props> = ({onClick}) => { 
    /*const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude]);
    
        });
    }, []);*/

    function LocationMarker() {
        const [position, setPosition] = useState<[number, number]>([0,0]);

        useMapEvents({
            click(e){
                onClick([
                    e.latlng.lat,
                    e.latlng.lng
                ])
            },
        })
    
        return (
            position ?
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
            :
            null
        )
    }

    return (
        <MapContainer 
            center={[
                -20.4776611, 
                -54.7216394
            ]} 
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

export default MapLeaflet;