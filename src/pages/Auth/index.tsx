import { useState } from "react";
import { Login, Register } from "..";

export function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      {isSignUp ? (
        <Register setIsSignUp={setIsSignUp} />
      ) : (
        <Login setIsSignUp={setIsSignUp} />
      )}
    </>
  );
}
