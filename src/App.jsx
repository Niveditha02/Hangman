// import React, { useState } from 'react';
// import Button from './Components/Button/Button.jsx';
// import getButtonStyling from './Components/Button/getButtonStyling';
// import TextInput from './Components/TextInputForm/TextInput'; 
// import GreetingsInputContainer  from './Components/Greetings/GreetingsContainer.jsx';
// import TextInputForm from './Components/TextInputForm/TextInputForm';
// import TextInputFormContainer from './Components/TextInputForm/TextInputFormContainer.jsx';

// function App(){
//       return (
//             <div className='App p-5 text-center'>
//                   <h1 className="hello">Welcome to HangMan</h1>
//                   <TextInputFormContainer />
//             </div>
//       );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
// import "./index.css";

import StartGame from "./pages/StartGame.jsx";
import PlayGame from "./pages/PlayGame.jsx";  
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer.jsx";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartGame />} />
      {/* Below is the routing for path param in url */}
      {/* <Route path="/play/:text/:id" element={<PlayGame />} /> */}
      <Route path="/play" element={<PlayGame />} />
      <Route path="/" element={<div>Home</div>} />
    </Routes>
  );
}

export default App;
