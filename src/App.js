import InputField from './components.js';

export default function App() {
  return (
    <div>
      <InputField label="Top text" inputId="topInput" />
      <br />
      <br />
      <InputField label="Bottom text" inputId="bottomInput" />
      <br />
      <br />
      <InputField
        label="Which template do you want to use?"
        inputId="templateInput"
      />
    </div>
  );
}
