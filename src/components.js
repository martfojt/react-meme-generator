import React, { useState } from 'react';

// Input field component
export default function InputField({ label, inputId }) {
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

// Image preview component
export function ShowPreview() {
  return (
    <div>
      <img
        src="https://api.memegen.link/images/ds/small_file/high_quality.png"
        alt="meme"
      />
    </div>
  );
}

// Download button component

export function DownloadButton() {
  return (
    <div>
      <button type="button">Download</button>
    </div>
  );
}
