import React from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7];

const RandomNumber = () => {
  const [number, setNumber] = React.useState(numbers[0]); // Initialize with the first number

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setNumber(numbers[randomIndex]);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick} className="btn btn-primary">
        Random
      </button>
    </div>
  );
};

export default RandomNumber;
