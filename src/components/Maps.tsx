import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '570px',
    height: '400px'
  };
  
  const center = {
    lat: -2.421593318553686,
    lng: -54.70764520311432
  };  

  export function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC72c9ReykOx6Q_0anQWnp5RjgaEFQ-K5k"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker
          position={center}
          options={{
            label: {
              text: "Orion",
              className: 'map-marker',
            }
          }}
        />
        <></>
      </GoogleMap>
  ) : <></>
}