import React from 'react';

interface MarkerProps {
  lat: number;
  lng: number;
  title?: string;
  onClick?: () => void;
}

export const Marker: React.FC<MarkerProps> = ({ lat, lng, title, onClick }) => {
  return (
    <div
      className="marker"
      onClick={onClick}
      title={title}
      role="button"
      tabIndex={0}
    >
      <div className="marker-pin" />
      {title && <div className="marker-label">{title}</div>}
    </div>
  );
};

export default Marker;
