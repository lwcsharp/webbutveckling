import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';

import './vehicle.css';
const VehiclePage = () => {
  const [vehicle, setVehicle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadVehicle = async () => {
      const response = await fetch(`http://localhost:5001/vehicles/${id}`);
      if (response.ok) {
        const result = await response.json();

        setVehicle(result);
      }
    };
    loadVehicle();
  }, [id]);

  return (
    <>
      {vehicle && (
        <>
          <PageTitle title={`${vehicle.manufacturer} ${vehicle.model}`} />
          <section className='vehicle-details'>
            <img src={vehicle.imageUrl} alt={vehicle.model} />
            <div className='info'>
              <p>
                Årsmodell: <span>{vehicle.modelYear}</span>
              </p>
              <p>
                Antal körda km: <span>{vehicle.mileage}</span>
              </p>
              <p>
                Pris: <span>{vehicle.value}</span>
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default VehiclePage;
