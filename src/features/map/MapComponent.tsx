import React from 'react';

/**
 * Componente MapComponent: Integración con Google Maps
 * Componente modular y escalable para mostrar mapas interactivos usando iframe
 */
type Marker = { position: { lat: number; lng: number }; title: string };
interface MapComponentProps {
  markers?: Marker[];
  height?: string;
  width?: string;
  className?: string;
  mapUrl?: string;
  zoom?: number;
  center: { lat: number; lng: number };
}

const MapComponent: React.FC<MapComponentProps> = ({
  height = '450px',
  width = '100%',
  className = '',
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.392595288302!2d-76.97982422525412!3d-12.085253488154592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c79f5dacafbf%3A0x2aecf92fd4325f0d!2sJockey%20Plaza!5e0!3m2!1ses-419!2spe!4v1759363178846!5m2!1ses-419!2spe',
}) => {
  return (
    <div
      style={{ height, width }}
      className={`bg-gray-200 ${className}`}
      data-testid="map-container"
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
    </div>
  );
};

export default MapComponent;
