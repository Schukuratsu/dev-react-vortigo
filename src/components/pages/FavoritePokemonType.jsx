import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { toastr } from "react-redux-toastr";
import { saveFavoritePokemonType } from "../../actions/trainerActions";
import { savePokemonTypes } from "../../actions/appActions";
import pokemonTypeApi from "../../api/pokemonType";
import BackIconButton from "../common/BackIconButton";
import QuestionText from "../common/QuestionText";
import PhraseText from "../common/PhraseText";
import TypeSelect from "../common/TypeSelect";
import TypeSelectModal from "../common/TypeSelectModal";
import NextIconButton from "../common/NextIconButton";

function TranerName() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [pokemonType, setPokemonType] = React.useState("");
  const [pokemonTypes, setPokemonTypes] = React.useState(
    useSelector((store) => store.appState.pokemonTypes)
  );
  const [modalIsVisible, setModalIsVisible] = React.useState(false);

  const openModal = () => setModalIsVisible(true);
  const closeModal = () => setModalIsVisible(false);

  const onClickNext = () => {
    if (pokemonType) {
      dispatch(saveFavoritePokemonType(pokemonType));
      history.push("/pokedex");
    } else {
      toastr.error("Select a Pokémon type.");
    }
  };

  const onClickBack = () => {
    history.push("/trainer-name");
  };

  const trainerName = useSelector(
    (store) => store.trainerState.name,
    shallowEqual
  );

  // will redirect to Home on page reload
  const fromHome = useSelector(
    (store) => store.appState.fromHome,
    shallowEqual
  );
  React.useEffect(() => {
    if (!fromHome) {
      history.push("/");
    }
  }, []);

  // loads pokemon types from api
  React.useEffect(() => {
    if (!pokemonTypes[0]) {
      pokemonTypeApi.list().then((response) => {
        const context = document.createElement("canvas").getContext("2d");
        response.map((type) => {
          const myImg = new Image();
          myImg.src = response.thumbnailImage;
          context.drawImage(myImg, 0, 0);
          const colors = [
            context.getImageData(0, 0, 1, 1).data,
            context.getImageData(49, 49, 1, 1).data,
          ];
          console.log(colors);
        });
        dispatch(savePokemonTypes(response));
        setPokemonTypes(response);
        console.log(response);
      });
    }
  }, []);

  return (
    <div className="page bg-image column">
      <div className="grow column content">
        <BackIconButton
          onClick={onClickBack}
          className="back-icon-button-position"
        />
        <QuestionText
          text={`Hello, trainer ${trainerName}!`}
          className="question-text-spacing"
        />
        <PhraseText
          text="...now tell us which is your favorite Pokémon type:"
          className="phrase-text-spacing"
        />
        <TypeSelect
          onClick={openModal}
          className="type-select-position"
          text={pokemonType}
        />
        <TypeSelectModal
          onCancel={closeModal}
          visible={modalIsVisible}
          onChange={setPokemonType}
          value={pokemonType}
          options={pokemonTypes}
          className="type-select-modal-position"
        />
        <div className="column grow align-center justify-end">
          <NextIconButton
            onClick={onClickNext}
            className="next-icon-button-position"
          />
        </div>
      </div>
    </div>
  );
}

export default TranerName;
