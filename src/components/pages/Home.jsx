import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFromHome } from "../../actions/appActions";
import TitleImage from "../common/TitleImage";
import LargeButton from "../common/LargeButton";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToTrainerName = () => {
    dispatch(setFromHome());
    history.push("/trainer-name");
  };

  return (
    <div className="page bg-image column">
      <TitleImage />
      <div className="column grow justify-center align-center pikachu-background content">
        <LargeButton text="Let's go!" onClick={goToTrainerName} />
      </div>
    </div>
  );
}

export default Home;
