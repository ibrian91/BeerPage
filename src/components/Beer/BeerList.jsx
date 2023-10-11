import "./Beer.css";
import Beer from "./Beer";

// import users from "./MocUsers.js"; por ahora lo comento
// hasta corregirlo y ver como se trabaja
// con el moc de beers

export default function BeerList(props) {
  return (
    // aca es para trabajar el diseño de beer-list, no esta hecho

    <ul className="image-list">
      {props.Beers.map((beer) => {
        return (
          <Beer
            Id={beer["id"]}
            BeerName={beer.name}
            Type={beer.type}
            Picture={beer.label}
            Abv={beer.abv}
          />
        );
      })}
    </ul>
  );
}
