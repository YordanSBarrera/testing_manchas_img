const Card = (props) => {
  return (
    <div>
      <img
        src={props.img}
        alt={props.imgName ? props.imgName : "Uhp img rota"}
      />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
export default Card;
