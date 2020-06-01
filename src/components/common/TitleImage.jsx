import React from "react";
import pokemonLogo from "../../assets/pokemon-logo.png";
import finder from "../../assets/finder.png";

function TitleImage() {
  return (
    <div className="column align-center title-image">
      <img src={pokemonLogo} alt="Pokémon" />
      <img src={finder} alt="finder" className="finder-image" />
    </div>
  );
}

export default TitleImage;
