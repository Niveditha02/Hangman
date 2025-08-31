import React, { useState } from 'react';
import Button from './Components/Button/Button.jsx';
import getButtonStyling from './Components/Button/getButtonStyling';
import TextInput from './Components/TextInputForm/TextInput'; 
import GreetingsInputContainer  from './Components/Greetings/GreetingsContainer.jsx';
import TextInputForm from './Components/TextInputForm/TextInputForm';

function App(){
      return (
            <div className='App p-5 text-center'>
                  <h1 className="hello">Welcome to HangMan</h1>
                  <TextInputForm />
            </div>
      );
}

export default App;