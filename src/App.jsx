
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [add, setAdd] = useState(false);
  const [number, setNumber] = useState(false);

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
      setAdd(false);
    } else {
      setNumber(true);
      speak("Number cannot be greater than 10")
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setAdd(false); 
      setNumber(false); 
    } else {
     
      setAdd(true);
      speak("Number cannot be less than 0");
    }
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported');
    }
  };

  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>
      {add && <p style={{ color: "red" }}>Number cannot be less than 0</p>}
      {number && <p style={{ color: "red" }}>Number cannot be greater than 10</p>}
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
