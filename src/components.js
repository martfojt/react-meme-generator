import React, { useState } from 'react';

// Input field component
function InputField({ label, inputId }) {
  const [inputValue, setInputValue] = useState('');
  // Input component
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default InputField;

// Preview component

function showPreview() {
  return;
}
