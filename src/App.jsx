import React, { useState } from 'react';
import Button from './Components/Button/Button.jsx';
import getButtonStyling from './Components/Button/getButtonStyling';
import TextInput from './Components/TextInputForm/TextInput'; // ✅ Correct import
import GreetingsInputContainer  from './Components/Greetings/GreetingsContainer.jsx';
import TextInputForm from './Components/TextInputForm/TextInputForm';

function App(){
      // const [inputText, setInputText] = useState(''); // ✅ Declare state
      // const handleClick = () => {
      //       alert('Button clicked!');
      // };

      // return(
      //       <div className='App p-5 text-center'>
      //             <h1 className="hello">Welcome to HangMan</h1>
      //             <Button text='Start Game' onClickHandler={handleClick} styleType='primary'/>
      //             <Button text='Help' onClickHandler={() => alert('Help clicked!')} styleType='secondary'/>
      //             <Button text="Click Me" styleType='success' onClickHandler={handleClick}/>
      //             <Button text="Cancel" styleType='error' onClickHandler={()=> alert('Cancelled!')}/>
      //             <Button text="Submit" styleType='primary' onClickHandler={()=> alert('Submitted!')}/>
      //             <Button text="Warning" styleType='warning' onClickHandler={()=> alert('Warning!')}/>
      //             <TextInput
      //             label={''}
      //             placeholder={'Type something...'}
      //             value={inputText}
      //             onChangeHandler={(e) => setInputText(e.target.value)}
      //             />
      //             <h1 className="text-center text-2x1 font-bold my-4">Greetings App</h1>
      //             <GreetingsInputContainer />
      // </div>
      // );
      return (
            <div className='App p-5 text-center'>
                  <h1 className="hello">Welcome to HangMan</h1>
                  <TextInputForm />
            </div>
      );
}

export default App;