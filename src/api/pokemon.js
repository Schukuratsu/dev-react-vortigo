// import Axios from "./config";
import pokemons from "../constants/pokemons";

class PokemonApi {
  static list() {
    return new Promise((resolve) => setTimeout(resolve(pokemons), 200));
    // return Axios({
    //   method: "GET",
    //   url: "/pokemons.json",
    // });
  }
}

export default PokemonApi;
