import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { SetStateAction, createContext, useState } from "react";
import { SignIn, SignUp, Forgot } from "../@types";
import { auth } from '../services/firebaseConfig';

interface AuthContextData {
  signData: SignIn;

  successSignUp: boolean;
  setSignData: React.Dispatch<SetStateAction<SignIn>>;
  handleSignIn: (data: SignIn) => void;
  handleSignUp: (data: SignUp) => void;
  handleSignOut: () => void;
  handleForgot: (data: Forgot) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [signData, setSignData] = useState<SignIn>(null!);

  const [successSignUp, setSuccessSignUp] = useState(false);

  async function handleSignIn(data: SignIn) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user;

      console.log(user)
      return user
    } catch (error) {
      return error;
    }
  }

  function handleSignOut() {
    signOut(auth);
  }

  async function handleSignUp(data: SignUp) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user;

      return user;
    } catch (error) {
      return error;
    }
  }

  function handleForgot(data: Forgot) {
    console.log(data)
  }

  return (
    <AuthContext.Provider
      value={{ signData, successSignUp, setSignData, handleSignIn, handleSignOut, handleSignUp, handleForgot }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
