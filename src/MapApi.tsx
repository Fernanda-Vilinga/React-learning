// src/componentes/MapApi.tsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  onUpdate: (city: string, state: string) => void;
}

const MapApi: React.FC<MapProps> = ({ onUpdate }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      if (!mapInstance.current) {
        mapInstance.current = L.map(mapRef.current).setView([-8.83, 13.23], 6); // Coordenadas para Angola

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(mapInstance.current);

        const marker = L.marker([-8.83, 13.23], { draggable: true }).addTo(mapInstance.current);

        // Adicionar bandeira de Angola no mapa
        L.marker([-8.83, 13.23], {
          icon: L.icon({
            iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1200px-Flag_of_Angola.svg.png',
            iconSize: [50, 30],
          }),
        }).addTo(mapInstance.current);

        const updateAddress = async (lat: number, lon: number) => {
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`);
            const data = await response.json();
            
            const city = data.address.city || data.address.town || data.address.village;
            const state = data.address.state || ''; // Nominatim pode não fornecer estado para todas as localidades

            console.log('Updated city:', city);
            console.log('Updated state:', state);

            onUpdate(city, state);
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        };

        marker.on('dragend', (event: L.LeafletEvent) => {
          const marker = event.target as L.Marker;
          const { lat, lng } = marker.getLatLng();
          updateAddress(lat, lng);
        });

        updateAddress(-8.83, 13.23); // Atualiza o endereço com a posição inicial
      }
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [onUpdate]);

  return (
    <div>
      <div ref={mapRef} style={{ height: '180px', width: '100%' }} />
    </div>
  );
};

export default MapApi;
