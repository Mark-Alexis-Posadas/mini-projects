import React from "react";
import axios from "axios";

const RandomQuote = () => {
  const [quote, setQuote] = React.useState("");
  const [author, setAutor] = React.useState("");

  React.useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomQuote = response.data[randomIndex];

      setQuote(randomQuote.text);
      setAutor(randomQuote.author || "Unknown Author");
    } catch (err) {
      console.err("Error fetching quote:", err);
    }
  };
  return (
    <div className="container p-5">
      <h1>Random quote generator</h1>
      <blockquote>
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
      <button className="btn btn-primary" onClick={fetchQuote}>
        Get Another Quote
      </button>
    </div>
  );
};

export default RandomQuote;
