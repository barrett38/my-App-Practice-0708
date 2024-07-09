import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <p>"{quote}"</p>
        <p>- {author}</p>
        <button onClick={fetchQuote}>Get New Quote</button>
      </header>
    </div>
  );
}

export default App;
