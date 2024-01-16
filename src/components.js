import React, { useState } from 'react';

// Input field component
const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <label htmlFor="example">Top</label>
      <input
        id="example"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default InputField;
