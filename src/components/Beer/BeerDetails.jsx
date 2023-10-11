import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import beers from "./MocBeers.js";

const BeerDetails = (props) => {
  const { id } = useParams();
  const beer = beers.find((beer) => beer.id === id);

  if (!beer) {
    return <div>No se encontró la cerveza</div>;
  }
  return (
    <div>
      <h1>{beer.name}</h1>
      <p>ABV: {beer.abv}</p>
      <p>Tipo: {beer.type}</p>
      <img src={beer.label} alt={beer.name} />
    </div>
  );
};

export default BeerDetails;
