import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      console.log(response.body);
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // Do something with last chunk of data then exit reader
          break;
        }
        // Otherwise do something here to process current chunk
        const blob = new Blob([value]);
        console.log("value", value, blob);
        const text = await blob.text();
        console.log("text", text);
      }

      const corsResponse = await fetch("/cors");
      const data = await corsResponse.json();
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    makeAPICall();
  }, []);

  console.log("render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
