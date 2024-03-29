import { useState } from "react";
import { styled } from "styled-components";
import  Button from '../uiCommponets/Button.jsx'
import CustomInput from "../uiCommponets/Input.jsx";
//tagged template
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

// & :hover ->means child element hover
// &:hover -> means the button itself

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-slate-700 to-stone-800 mx-auto">
      <div className="flex-col gap-2 mb-6">
          <CustomInput
          label="Email"
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db"
            // }}
            invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <CustomInput
          label="Password"
            type="password"
           invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
