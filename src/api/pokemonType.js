// import Axios from "./config";
import types from "../constants/types.js";

class PokemonTypeApi {
  static list() {
    return new Promise((resolve) => setTimeout(resolve(types), 200));
    //   return Axios({
    //     method: "GET",
    //     url: "/types.json",
    //   }).then(response => response.results);
  }
}

export default PokemonTypeApi;
