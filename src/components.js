import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';

// Input field component
export default function InputField({ label, inputId, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
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
          data-test-id="meme-image"
        />
      </div>
    );
  } else {
    return (
      <div className="image-container">
        <img src={imageUrl} alt="meme" data-test-id="meme-image" />
      </div>
    );
  }
}

// Download button component
export function DownloadButton({ imageUrl }) {
  const handleDownload = () => {
    if (imageUrl) {
      saveAs(imageUrl, 'meme.png');
    }
  };

  return (
    <div>
      <button type="button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
}
