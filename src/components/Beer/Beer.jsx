import "./Beer.css";
import { Link } from "react-router-dom";

const Beer = (props) => {
  return (
    <li>
      <div className="beer-container">
        <div className="avatar">
          <img src={props.Picture} />
        </div>
        <div>
          <h2 className="beer-name">{props.BeerName}</h2>
          <h3 className="beer-type">{props.Type}</h3>
          <h4 className="beer-avg">{props.Abv}</h4>
        </div>
        <Link to={`/beers/${props.Id}`}>
          <button className="button-comprar">Comprar</button>
        </Link>
      </div>
    </li>
  );
};

export default Beer;
