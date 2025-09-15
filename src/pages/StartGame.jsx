import React from "react";
import { Link } from "react-router-dom";
import TextInputFormContainer from "../Components/TextInputForm/TextInputFormContainer.jsx";

function StartGame() {
  return (
    <>
      <h1>Start Game</h1>
      <TextInputFormContainer />
      <Link to="/play" className="text-blue-500">Start game link</Link>
    </>
  );
}

export default StartGame;
