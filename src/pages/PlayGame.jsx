import React from "react";
// import { Link,useSearchParams } from "react-router-dom";
// import { Link, useLocation, useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function PlayGame() {
  // this hook gives us access to the query parameters in the URL
  // const [searchparams] = useSearchParams();
  // console.log(searchparams.get("text"));
  // this hook gives us access to the path parameters in the URL
  // const {text,id}=useParams();

const {state} = useLocation();

const arr = ['hello','world'];

  return (
    <>
    {/* below is the adding param path in the url */}
      {/* <h1>Play Game {text}{id}</h1> */}
      <h1>Play Game {state.wordSelected}</h1>
      <Link to='/Start' style={{ color: "blue" }}>Start Game Link</Link>
    </>
  );
}

export default PlayGame;
