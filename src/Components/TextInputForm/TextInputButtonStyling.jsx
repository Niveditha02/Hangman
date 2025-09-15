import React from 'react';
import getButtonStyling from '../Button/getButtonStyling.js'; // Function that returns CSS classes based on style type

/**
 * Reusable Button component for presentation layer.
 * Renders a styled button with customizable text, style, and click behavior.
 */
function Button({ 
  text,                // The text label displayed inside the button
  onClickHandler,      // Function to call when the button is clicked
  styleType = "primary", // Button style type (e.g., "primary", "warning", etc.)
  type = "button"      // HTML button type ("button", "submit", "reset")
}) {

  return (
    <button
      onClick={onClickHandler}                  // Handles click events
      type={type}                               // Sets button's HTML type
      className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`} 
      // px-4 py-2 = padding; getButtonStyling(styleType) = style based on type; text-white = white text color
    >
      {text} 
    </button>
  );
}

export default Button;
