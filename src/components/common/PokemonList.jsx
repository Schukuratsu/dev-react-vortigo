import React from "react";
import { Typography } from "antd";
import arrowIcon from "../../assets/arrow.png";

function TypeScroller({
  selectedType = "grass",
  backgroundColors = ["#578cdb", "#cdb578"],
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
  // const typeFilter = (pokemon) => pokemon.type.includes(selectedType);
  const typeFilter = (pokemon) => true;
  // eslint-disable-next-line no-unused-vars
  const [pokemons, setPokemons] = React.useState([
    {
      abilities: ["Overgrow"],
      detailPageURL: "/us/pokedex/bulbasaur",
      weight: 15.2,
      weakness: ["Fire", "Flying", "Ice", "Psychic"],
      number: "001",
      height: 28.0,
      collectibles_slug: "bulbasaur",
      featured: "true",
      slug: "bulbasaur",
      name: "Bulbasaur",
      thumbnailAltText: "Bulbasaur",
      thumbnailImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      id: 1,
      type: ["grass", "poison"],
    },
    {
      abilities: ["Overgrow"],
      detailPageURL: "/us/pokedex/ivysaur",
      weight: 28.7,
      weakness: ["Fire", "Flying", "Ice", "Psychic"],
      number: "002",
      height: 39.0,
      collectibles_slug: "ivysaur",
      featured: "true",
      slug: "ivysaur",
      name: "Ivysaur",
      thumbnailAltText: "Ivysaur",
      thumbnailImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
      id: 2,
      type: ["grass", "poison"],
    },
    {
      abilities: ["Overgrow"],
      detailPageURL: "/us/pokedex/venusaur",
      weight: 220.5,
      weakness: ["Fire", "Flying", "Ice", "Psychic"],
      number: "003",
      height: 79.0,
      collectibles_slug: "venusaur",
      featured: "true",
      slug: "venusaur",
      name: "Venusaur",
      thumbnailAltText: "Venusaur",
      thumbnailImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
      id: 3,
      type: ["grass", "poison"],
    },
    {
      abilities: ["Blaze"],
      detailPageURL: "/us/pokedex/charmander",
      weight: 18.7,
      weakness: ["Ground", "Rock", "Water"],
      number: "004",
      height: 24.0,
      collectibles_slug: "charmander",
      featured: "true",
      slug: "charmander",
      name: "Charmander",
      thumbnailAltText: "Charmander",
      thumbnailImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      id: 4,
      type: ["fire"],
    },
    {
      abilities: ["Blaze"],
      detailPageURL: "/us/pokedex/charmeleon",
      weight: 41.9,
      weakness: ["Ground", "Rock", "Water"],
      number: "005",
      height: 43.0,
      collectibles_slug: "charmeleon",
      featured: "true",
      slug: "charmeleon",
      name: "Charmeleon",
      thumbnailAltText: "Charmeleon",
      thumbnailImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
      id: 5,
      type: ["fire"],
    },
    {
      abilities: ["Drought"],
      detailPageURL: "/us/pokedex/charizard",
      weight: 221.6,
      weakness: ["Water", "Rock", "Electric"],
      number: "006",
      height: 67.0,
      collectibles_slug: "charizard",
      featured: "true",
      slug: "charizard",
      name: "Charizard",
      thumbnailAltText: "Charizard",
      thumbnailImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
      id: 6,
      type: ["fire", "flying"],
    },
  ]);

  // React.useEffect(
  //   () => pokemonTypeApi.list().then((response) => setTypeList(response)),
  //   []
  // );

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
                })}
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
            .filter(typeFilter)
            .sort(pokemonSort)
            .map((pokemon) => (
              <tr key={pokemon.id}>
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
                  <Typography className="pokemon-list-text">
                    {pokemon.name}
                  </Typography>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TypeScroller;
