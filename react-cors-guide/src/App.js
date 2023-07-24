import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      console.log({ data });
    } catch (error) {
      console.log(error);
      const response = await fetch("http://localhost:8080/cors");
      const data = await response.json();
      console.log({ data });
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);

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
