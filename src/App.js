import InputField from './components.js';

export default function App() {
  return (
    <div>
      <InputField label="Text at the top" inputId="topInput" />
      <br />
      <br />
      <InputField label="Text at the bottom" inputId="bottomInput" />
      <br />
      <br />
      <InputField
        label="Which template do you want to use?"
        inputId="templateInput"
      />
    </div>
  );
}
