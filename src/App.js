import InputField, {
  DownloadButton,
  EditImage,
  ShowPreview,
} from './components.js';

export default function App() {
  const memeTemplate = '';
  const [topText, setTopText] = '';
  const [bottomText, setBottomText] = '';

  const imageUrl = `https://api.memegen.link/images/${memeTemplate}/${encodeURI(
    topText,
  )}/${encodeURI(bottomText)}.png`;

  return (
    <div>
      <ShowPreview imageUrl={imageUrl} />
      <br />
      <br />
      <InputField
        label="Top text"
        inputId="topInput"
        value={topText}
        onChange={setTopText}
      />
      <br />
      <br />
      <InputField
        label="Bottom text"
        inputId="bottomInput"
        value={bottomText}
        onChange={setBottomText}
      />
      <br />
      <br />
      <InputField
        label="Which template do you want to use?"
        inputId="templateInput"
      />
      <br />
      <br />
      <DownloadButton />
    </div>
  );
}
