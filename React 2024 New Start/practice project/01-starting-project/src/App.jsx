import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleValueChange = (inputIdentifier, newVal) => {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: newVal === "" ? "" : +newVal,
    })); //neVal -> string to val
  };

  const inputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleValueChange} />
      {!inputValid && (
        <p className="center">Enter a duration greater than zero </p>
      )}
      {inputValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
