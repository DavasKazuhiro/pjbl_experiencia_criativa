import "../styles/CardStyle.css"

const Card = (props) => {

  return (
    <>
    <div className = "card" onClick={() =>
      props.onClick(props.produto)
    }>
      <h5>{props.produto.nome}</h5>
    </div>
    </>
  );
};

export default Card;