//Logical layer
import React, { useState } from 'react';
import GreetingsInput from './GreetingsInput';

function GreetingsInputContainer(){
      const [name, setName]= useState('');

      return (
            <div className='max-w-md mx-auto mt-10'>
                  <GreetingsInput
                        name={name}
                        onNameChange={setName}/>
            </div>
      );
}

export default GreetingsInputContainer;


