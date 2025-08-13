//Presentation layer
import React from 'react';

function GreetingsInput({name,onNameChange}){
      return (
            <div className='p-4 border rounded'>
                  <input
                        type="text"
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e)=> onNameChange(e.target.value)}
                        className="border px-2 py-1 rounded"/>
                  <p className='mt-2'>Hello, {name || 'stranger'}!</p>
            </div>
      );
}

export default GreetingsInput;
