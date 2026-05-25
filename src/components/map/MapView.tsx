import React, { useEffect, useRef } from 'react';

interface MapViewProps {
  center?: [number, number];
  zoom?: number;
}

export const MapView: React.FC<MapViewProps> = ({ center = [0, 0], zoom = 10 }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize map
  }, [center, zoom]);

  return (
    <div
      ref={mapContainer}
      className="map-view"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default MapView;
