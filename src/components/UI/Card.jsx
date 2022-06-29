import "./Card.css";

const Card = function (props) {
  const classes = `card ${props.className}`; //multiple classes separated by space
  return <div className={classes}>{props.children}</div>;
};

export default Card;
