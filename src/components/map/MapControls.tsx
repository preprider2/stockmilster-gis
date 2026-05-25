import React from 'react';

interface MapControlsProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onReset?: () => void;
}

export const MapControls: React.FC<MapControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset,
}) => {
  return (
    <div className="map-controls">
      <button onClick={onZoomIn} aria-label="Zoom in">
        +
      </button>
      <button onClick={onZoomOut} aria-label="Zoom out">
        −
      </button>
      <button onClick={onReset} aria-label="Reset view">
        Reset
      </button>
    </div>
  );
};

export default MapControls;
