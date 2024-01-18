import React, { useState } from 'react';

// Input field component
export default function InputField({ label, inputId, value, onChange }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
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
