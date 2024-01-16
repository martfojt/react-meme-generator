import React, { useState } from 'react';

// Input field component
const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
  );
};

export default InputField;
