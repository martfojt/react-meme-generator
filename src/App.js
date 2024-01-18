import './style.css';
import { useState } from 'react';
import InputField, { DownloadButton, ShowPreview } from './components.js';

export default function App() {
  const [memeTemplate, setMemeTemplate] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  let imageUrl = '';
  if (memeTemplate) {
    imageUrl = `https://api.memegen.link/images/${memeTemplate}`;
    if (topText) {
      imageUrl += `/${encodeURI(topText)}`;
    }
    if (bottomText) {
      imageUrl += `/${encodeURI(bottomText)}`;
    }
    imageUrl += '.png';
  }

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
          label="Top text:"
          inputId="topInput"
          value={topText}
          onChange={setTopText}
        />
        <br />
        <InputField
          label="Bottom text:"
          inputId="bottomInput"
          value={bottomText}
          onChange={setBottomText}
        />
        <br />
        <DownloadButton />
      </div>
      <div className="image-section">
        <ShowPreview imageUrl={imageUrl} />
      </div>
    </div>
  );
}
