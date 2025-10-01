import React, { useEffect, useRef } from 'react';

/**
 * Componente MapComponent: Integración con Google Maps
 * Componente modular y escalable para mostrar mapas interactivos
 */
interface MapComponentProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title?: string;
  }>;
  height?: string;
  width?: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  center = { lat: 28.5618571, lng: -80.577366 }, // Cape Canaveral por defecto
  zoom = 10,
  markers = [],
  height = '500px',
  width = '100%',
  className = '',
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Función para cargar el mapa
    const initMap = () => {
      if (!mapRef.current) return;

      // Crear nueva instancia del mapa
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });

      // Guardar referencia al mapa
      googleMapRef.current = map;

      // Añadir marcadores si existen
      markers.forEach((markerData) => {
        new google.maps.Marker({
          position: markerData.position,
          map,
          title: markerData.title,
        });
      });
    };

    // Cargar Google Maps API si no está ya cargada
    if (window.google && window.google.maps) {
      initMap();
    } else {
      console.warn('Google Maps API not loaded. Please include the API script in your HTML.');
    }

    // Cleanup
    return () => {
      googleMapRef.current = null;
    };
  }, [center, zoom, markers]);

  return (
    <div 
      ref={mapRef} 
      style={{ height, width }} 
      className={`bg-gray-200 ${className}`}
      data-testid="map-container"
    >
      {/* Mensaje de fallback si Google Maps no está disponible */}
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">
          Loading map... If the map does&rsquo; appear, please ensure Google Maps API is properly loaded.
        </p>
      </div>
    </div>
  );
};

export default MapComponent;