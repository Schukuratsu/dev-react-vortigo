import React from "react";
import { Typography } from "antd";
import arrowIcon from "../../assets/arrow.png";

function TypeScroller({
  pokemons,
  selectedType,
  searchValue,
  // backgroundColors = ["#eee", "#ddd"],
  backgroundColors = ["#f0f0f0", "#f0f0f0"],
  className = "",
  ...props
}) {
  const [orderBy, setOrderBy] = React.useState({ field: "name", asc: true });
  const pokemonSort = (poke1, poke2) => {
    if (poke1[orderBy.field] === poke2[orderBy.field] && orderBy.asc) {
      return 0;
    }
    if (
      (poke1[orderBy.field] < poke2[orderBy.field] && orderBy.asc) ||
      (poke1[orderBy.field] > poke2[orderBy.field] && !orderBy.asc)
    ) {
      return -1;
    }
    return 1;
  };
  const typeFilter = (pokemon) => pokemon.type.includes(selectedType);
  const searchFilter = (pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    pokemon.number.includes(searchValue);

  return (
    <div className={`pokemon-list grow column ${className}`}>
      <table {...props}>
        <thead>
          <tr>
            <th
              className="cursor-pointer"
              onClick={() =>
                setOrderBy({
                  field: "number",
                  asc: orderBy.field === "number" ? !orderBy.asc : true,
                })
              }
            >
              #
              {orderBy.field === "number" &&
                (orderBy.asc ? (
                  <img src={arrowIcon} alt="order by name" />
                ) : (
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src={arrowIcon}
                    alt="order by name"
                  />
                ))}
            </th>
            <th>Image</th>
            <th
              className="cursor-pointer"
              onClick={() =>
                setOrderBy({
                  field: "name",
                  asc: orderBy.field === "name" ? !orderBy.asc : true,
                })
              }
            >
              Name
              {orderBy.field === "name" &&
                (orderBy.asc ? (
                  <img src={arrowIcon} alt="order by name" />
                ) : (
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src={arrowIcon}
                    alt="order by name"
                  />
                ))}
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .filter(searchValue ? searchFilter : typeFilter)
            .sort(pokemonSort)
            .map((pokemon) => (
              <tr key={pokemon.id} className="cursor-pointer">
                <td>
                  <Typography className="pokemon-list-text">
                    {pokemon.number}
                  </Typography>
                </td>
                <td>
                  <img
                    style={{
                      background: `linear-gradient(to right, ${backgroundColors[0]} 0%, ${backgroundColors[0]} 50%, ${backgroundColors[1]} 50%, ${backgroundColors[1]} 100%)`,
                    }}
                    className="pokemon-list-image"
                    src={pokemon.thumbnailImage}
                    alt={pokemon.thumbnailAltText}
                  />
                </td>
                <td>
                  <a
                    href={`https://www.pokemon.com${pokemon.detailPageURL}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography className="pokemon-list-text">
                      {pokemon.name}
                    </Typography>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TypeScroller;
