// --- Presentation Layer: Responsible for rendering the UI ---
import React from 'react';
import TextInput from './TextInput.jsx';               // Presentation layer component
import Button from './TextInputButtonStyling';         // Presentation layer component
import TextInputFormContainer from './TextInputFormContainer.jsx';//logical layer component

function TextInputForm() {

      // --- (UI Event Handling — still considered presentation-level logic) ---
      // Prevents the default HTML form submission (page reload) below is logical layer code moved to TextInputFormContainer.jsx
      // This is not business logic — just controlling the UI behavior.
      // function handleFormSubmit(event) {
      //       event.preventDefault();
      //       console.log("Form submitted"); // Debugging output — not domain logic
      // }

      // function handleTextInputChange(event) {   
      //       console.log("Text input changed:", event.target.value); // Debugging output
      // }     

      return (
            // --- Presentation Layer: JSX markup for rendering form ---
            <form onSubmit={handleFormSubmit}>
                  {/* Presentation Layer: Renders label + input */}
                  <div>
                        <TextInput
                              label="Enter a word or phrase"
                              placeholder="Enter a word or phrase here ..."
                              onChangeHandler={handleTextInputChange} // Debugging output    
                        />
                  </div>

                  {/* Presentation Layer: UI-only button for toggling */}
                  <div>
                        <Button
                              styleType="warning"
                              text="Show/hide"
                        />
                  </div>

                  {/* Presentation Layer: Submit button */}
                  <div>
                        <Button
                              type="submit"
                              text="Submit"
                              styleType="primary"
                        />
                  </div>
            </form>
      );
}

export default TextInputForm;
