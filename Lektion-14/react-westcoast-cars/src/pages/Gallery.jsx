import { useEffect, useState } from 'react';
import './gallery.css';

const GalleryPage = () => {
  // 1. Logiken
  const [vehicles, setVehicles] = useState(null);

  // Lifecycle hook
  // useEffect körs när komponenten laddas in...
  useEffect(() => {
    const listVehicles = async () => {
      const response = await fetch('http://localhost:5001/vehicles');
      if (response.ok) {
        const result = await response.json();
        setVehicles(result);
      }
    };
    listVehicles();
  }, []);

  // 2. JSX Struktur av dokumentet/komponent
  return (
    <article className='frame'>
      {vehicles &&
        vehicles.map((vehicle) => (
          <div key={vehicle.id}>
            {vehicle.make} - {vehicle.model}
          </div>
        ))}
    </article>
  );
};

export default GalleryPage;
