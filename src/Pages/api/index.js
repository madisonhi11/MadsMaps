
import { useMemo } from "react";
import { GoogleMap, useLoadScript,  } from "@react-google-maps/api";
// MarkerF
const mapContainersStyle = {
  width:"100vw",
  height:"100vh",
};
export default function Homes() {
  const  {isLoaded}  = useLoadScript({
    googleMapsApiKey: "API KEY"
  });

  if (!isLoaded) return <h1>Loading...</h1>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (

  //   <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
  //   <MarkerF  position={center} />
  // </GoogleMap>
    <GoogleMap mapContainersStyle={mapContainersStyle} zoom = {8} center ={center}>
      {/* <MarkerF  position={center} /> */}
    </GoogleMap>
  );
}