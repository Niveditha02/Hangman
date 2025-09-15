// Presentation layer: A reusable text input field component
import React from 'react';

/**
 * This component is stateless and purely presentational — it relies on parent
 */
function TextInput({ 
  type = "text",                  // Input type (text, password, email, etc.)
  label,                          // Label text displayed above the input
  placeholder = "enter input here", // Placeholder text shown when the field is empty
  value,                          // Current value of the input (controlled component)
  onChangeHandler                 // Function to call when the input value changes
}) {
  return (
    <label>
      {/* Display the label text above the input */}
      <span className="text-gray-700">{label}</span>

      {/* Input field with Tailwind CSS styling */}
      <input
        type={type}                                      // Sets the input type
        className={`px-4 py-2 border border-gray-300 rounded-md w-full mt-1`} 
        // px-4 py-2 = padding; border classes = border styling; rounded-md = rounded corners; w-full = full width; mt-1 = small top margin
        placeholder={placeholder}                        // Placeholder text
        value={value}                                     // Controlled input value
        onChange={onChangeHandler}                        // Fires when user types
      />
    </label>
  );
}

export default TextInput;
