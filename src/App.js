import './style.css';
import { useState } from 'react';
import InputField, { DownloadButton, ShowPreview } from './components.js';

export default function App() {
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  // Construct the image URL dynamically
  let imageUrl = `https://api.memegen.link/images/${memeTemplate}`;
  imageUrl += `/${topText ? encodeURI(topText) : '_'}`;
  imageUrl += `/${bottomText ? encodeURI(bottomText) : '_'}`;
  imageUrl += '.png';

  return (
    <div className="container">
      <div className="form-section">
        <InputField
          label="Meme template"
          inputId="templateInput"
          value={memeTemplate}
          onChange={(value) => setMemeTemplate(value)}
        />
        <br />
        <InputField
          label="Top text"
          inputId="topInput"
          value={topText}
          onChange={setTopText}
        />
        <br />
        <InputField
          label="Bottom text"
          inputId="bottomInput"
          value={bottomText}
          onChange={setBottomText}
        />
        <br />
        <div className="form-section">
          <DownloadButton imageUrl={imageUrl} />
        </div>
      </div>
      <div className="image-section">
        <ShowPreview imageUrl={imageUrl} />
      </div>
    </div>
  );
}
