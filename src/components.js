// Input field component
export default function InputField({ label, inputId, value, onChange }) {
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        value={value} // Controlled by parent component
        onChange={(e) => onChange(e.target.value)} // Parent component handles change
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
export function DownloadButton() {
  return (
    <div>
      <button type="button">Download</button>
    </div>
  );
}
