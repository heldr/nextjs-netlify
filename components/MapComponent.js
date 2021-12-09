import 'mapbox-gl/dist/mapbox-gl.css';

import { useMapGL } from './useMapGL.js';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import { memo, useRef } from 'react';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
if (typeof window !== 'undefined') {
  mapboxgl.workerUrl = '/mapbox/mapbox-gl-csp-worker.js';
}

const MapComponent = memo(({ className, style, latitude, longitude }) => {
  const mapContainerRef = useRef(null);
  const map = useMapGL({ ref: mapContainerRef, latitude, longitude });

  console.log(map);

  return <div className={className} style={style} ref={mapContainerRef} />;
});

MapComponent.displayName = 'MapComponent';

export { MapComponent };
