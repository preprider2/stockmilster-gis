import React, { useState } from 'react';

interface Layer {
  id: string;
  name: string;
  visible: boolean;
}

interface LayerPanelProps {
  layers?: Layer[];
  onToggleLayer?: (layerId: string) => void;
}

export const LayerPanel: React.FC<LayerPanelProps> = ({
  layers = [],
  onToggleLayer,
}) => {
  return (
    <div className="layer-panel">
      <h3>Layers</h3>
      <ul>
        {layers.map((layer) => (
          <li key={layer.id}>
            <input
              type="checkbox"
              checked={layer.visible}
              onChange={() => onToggleLayer?.(layer.id)}
              id={`layer-${layer.id}`}
            />
            <label htmlFor={`layer-${layer.id}`}>{layer.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayerPanel;
