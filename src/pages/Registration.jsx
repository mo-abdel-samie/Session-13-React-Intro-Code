import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { SignupForm } from "../components/SignupForm";

export const Registration = () => {
  const [register, setRegister] = useState(false);

  return (
    <React.Fragment>
      {!register && <LoginForm handleToggle={setRegister} />}
      {register && <SignupForm handleToggle={setRegister} />}
    </React.Fragment>
  );
};
