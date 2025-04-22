import './card.css';

const Card = ({ vehicle }) => {
  return (
    <section className='card'>
      <li>
        <div>
          <h3>{vehicle.manufacturer}</h3>
          <h4>{vehicle.model}</h4>
        </div>
        <a href={`/vehicles/${vehicle.id}`}>
          <img src={vehicle.imageUrl} alt={vehicle.model} />
        </a>
      </li>
    </section>
  );
};
export default Card;
