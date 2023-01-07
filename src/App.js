import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

function App() {
  const [choice, setChoice] = useState(true);
  return (
    <div className="App">
      {choice ? <Form choice={choice} setChoice={setChoice} /> : <StepTwo />}
      <Footer />
    </div>
  );
}

export default App;
