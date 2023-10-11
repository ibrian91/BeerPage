import React, { useEffect, useState } from "react";
import BeerList from "./BeerList";
import beers from "./MocBeers.js";

const BeerPage = ({ token }) => {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    // Función para obtener datos de cervezas utilizando el token
    const handleGetBeers = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Utiliza el token en el encabezado
        },
      };

      try {
        const response = await fetch(
          " https://tp2-backend.azurewebsites.net/api/pets/",
          requestOptions
        );

        if (response.ok) {
          const data = await response.json();
          setBeerData(data); // Almacena los datos de las cervezas en el estado
        } else {
          console.error("Error al obtener datos de cervezas");
        }
      } catch (error) {
        console.error("Error al obtener datos de cervezas:", error);
      }
    };

    // Llama a la función para obtener datos de cervezas al cargar la página
    handleGetBeers();
  }, [token]);

  return (
    <div>
      <h1 className="title-BeerPage">Your Best Value Proposition</h1>
      <p className="sub-title-BeerPage">
        "If you don't try this app, you won't become the superhero you were
        meant to be"
      </p>
      <BeerList Beers={beers} />
    </div>
  );
};

export default BeerPage;
