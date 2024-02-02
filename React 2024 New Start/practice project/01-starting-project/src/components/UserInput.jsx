function UserInput({userInput, onChange}) {
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
              onChange("initialInvestment", e.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annual-inv">Annual Investment</label>
          <input
            type="number"
            id="annual-inv"
            required
            onChange={(e) =>
              onChange("annualInvestment", e.target.value)
            }
            value={userInput.annualInvestment}
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
              onChange("expectedReturn", e.target.value)
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
            onChange={(e) => onChange("duration", e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
