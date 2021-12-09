import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp.js';
import { useEffect, useState } from 'react';

const useMapGL = ({ ref, latitude: latitudeProp, longitude: longitudeProp }) => {
  const [longitudeState, setLongitudeState] = useState(longitudeProp);
  const [latitudeState, setLatitudeState] = useState(latitudeProp);
  const [zoom] = useState(7);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (latitudeState && longitudeState) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: 'mapbox://styles/heldertruckmap/ckwwcdm530lnl14ot1lmw87br',
        center: [longitudeState, latitudeState],
        scrollZoom: false,
        zoom,
        attributionControl: false
      });

      map.addControl(new mapboxgl.NavigationControl());

      setMap(map);
      return () => map.remove();
    }
  }, [longitudeState, latitudeState]);

  return map;
};

export { useMapGL };