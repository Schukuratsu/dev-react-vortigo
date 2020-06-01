import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setFavoritePokemonType } from "../../actions/trainerActions";
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
  const [modalIsVisible, setModalIsVisible] = React.useState(false);

  const openModal = () => setModalIsVisible(true);
  const closeModal = () => setModalIsVisible(false);

  const goToPokedexScreen = () => {
    dispatch(setFavoritePokemonType(pokemonType));
    history.push("/pokedex");
  };

  const goToTrainerNameScreen = () => {
    history.push("/trainer-name");
  };

  const trainerName = useSelector(
    (store) => store.trainerState.name,
    shallowEqual
  );

  // // will redirect to Home on page reload
  // const fromHome = useSelector((store) => store.appState.fromHome, shallowEqual);
  // React.useEffect(
  //   () => {
  //     if (!fromHome) {
  //       history.push('/');
  //     }
  //   },
  //   [],
  // );

  return (
    <div className="page bg-image column">
      <div className="grow column content">
        <BackIconButton
          onClick={goToTrainerNameScreen}
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
          className="type-select-modal-position"
        />
        <div className="column grow align-center justify-end">
          <NextIconButton
            onClick={goToPokedexScreen}
            className="next-icon-button-position"
          />
        </div>
      </div>
    </div>
  );
}

export default TranerName;
