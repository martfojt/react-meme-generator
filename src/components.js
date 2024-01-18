import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';

// Input field component
export default function InputField({ label, inputId, value, onChange }) {
  const [inputValue, setInputValue] = useState(value); // Initialize with passed value

  // Handle local change
  const handleChange = (e) => {
    setInputValue(e.target.value); // Update local state
    onChange(e.target.value); // Pass the new value to the parent component
  };

  // Effect to update local state when the value prop changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} value={inputValue} onChange={handleChange} />
    </div>
  );
}

// Image preview component
export function ShowPreview({ imageUrl }) {
  if (!imageUrl) {
    return (
      <div className="image-container">
        <img
          src="https://api.memegen.link/images/doge.png"
          alt="default meme"
        />
      </div>
    );
  } else {
    return (
      <div className="image-container">
        <img src={imageUrl} alt="meme" />
      </div>
    );
  }
}

// Download button component
export function DownloadButton() {
  return (
    <div>
      <button type="button">Download</button>
    </div>
  );
}
