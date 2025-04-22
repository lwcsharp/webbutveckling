const Card = ({ vehicle }) => {
  return (
    <div>
      {vehicle.manufacturer} - {vehicle.model}
    </div>
  );
};
export default Card;
