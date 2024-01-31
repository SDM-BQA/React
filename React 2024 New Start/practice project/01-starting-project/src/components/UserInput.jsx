import React, { useState } from "react";

function UserInput() {
  const [userInput, setUserInput] = useState({
    initialllnvestment: 10000,
    annuallnvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleValueChange = (inputIdentifier, newVal) => {
    setUserInput((prev) => ({ ...prev, [inputIdentifier]: newVal }));
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="init-inv">Initial Invesment</label>
          <input
            type="number"
            id="init-inv"
            required
            onChange={(e) =>
              handleValueChange("initialllnvestment", e.target.value)
            }
            value={userInput.initialllnvestment}
          />
        </p>
        <p>
          <label htmlFor="annum-inv">Annual Investment</label>
          <input
            type="number"
            id="annum-inv"
            required
            onChange={(e) =>
              handleValueChange("annuallnvestment", e.target.value)
            }
            value={userInput.annuallnvestment}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="ret">Expected Return</label>
          <input
            type="number"
            id="ret"
            required
            onChange={(e) =>
              handleValueChange("expectedReturn", e.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            required
            onChange={(e) => handleValueChange("duration", e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
