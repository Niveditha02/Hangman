// logical layer for TextInputForm component
function TextInputFormContainer(){
function handleFormSubmit(event) {
      event.preventDefault();
      console.log("Form submitted"); // Debugging output — not domain logic
}
function handleTextInputChange(event) {
      console.log("Text input changed:", event.target.value); // Debugging output
}
return (<TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      />);

}

export default TextInputFormContainer;