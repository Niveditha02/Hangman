// logical layer for TextInputForm component
import React, { useState } from 'react';
import TextInputForm from './TextInputForm.jsx'; 
import { useNavigate } from 'react-router-dom';


function TextInputFormContainer(){

//  hook to manage input type state (text or password) 
const [inputType,setInputType]=useState("password");
const [value,SetValue]=useState("");
const navigate = useNavigate();  

function handleFormSubmit(event) {
      event.preventDefault();
      console.log("Form submitted",value); // Debugging output — not domain logic
      if(value){
      // it just moves to the next page
      //      navigate("/play");
      navigate(`/play`,{state:{wordSelected:value}});
      // pass the text as a query parameter in the URL
      // navigate(`/play?text=${value}`);
      // pass the text as a path parameter in the URL
      // navigate(`/play/${value}/1`);
      }
}
function handleTextInputChange(event) {
      console.log("Text input changed:", event.target.value); // Debugging output
      SetValue(event.target.value);
      
}

function handleshowhideclick(){
      console.log("Show/hide button clicked"); 
      if(inputType === "password"){
            setInputType("text");
      }else{

            setInputType("password");
      }
}

return (<TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleshowhideclick={handleshowhideclick}
      />);

}

export default TextInputFormContainer;