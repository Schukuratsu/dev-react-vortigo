import React from "react";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setName } from "../../actions/trainerActions";
import QuestionText from "../common/QuestionText";
import PhraseText from "../common/PhraseText";
import NameInput from "../common/NameInput";
import NextIconButton from "../common/NextIconButton";

function TranerName() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [trainerName, setTrainerName] = React.useState(
    useSelector((store) => store.trainerState.name)
  );

  const goToFavoritePokemonType = () => {
    dispatch(setName(trainerName));
    history.push("/favorite-pokemon-type");
  };

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
        <QuestionText
          text="Let's meet each other first?"
          className="question-text-spacing"
        />
        <PhraseText
          text="First we need to know your name..."
          className="phrase-text-spacing"
        />
        <NameInput
          value={trainerName}
          className="name-input-position"
          onChange={(evt) => setTrainerName(evt.target.value)}
        />
        <div className="column grow align-center justify-end">
          <NextIconButton
            onClick={goToFavoritePokemonType}
            className="next-icon-button-position"
          />
        </div>
      </div>
    </div>
  );
}

export default TranerName;
