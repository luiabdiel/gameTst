import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { SetStateAction, createContext, useState } from "react";
import { SignIn, SignUp } from "../@types";
import { auth } from '../services/firebaseConfig';

interface AuthContextData {
  signData: SignIn;
  successSignUp: boolean;
  setSignData: React.Dispatch<SetStateAction<SignIn>>;
  handleSignIn: (data: SignIn) => Promise<string | User>;
  handleSignUp: (data: SignUp) => Promise<User>;
  handleSignOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [signData, setSignData] = useState<SignIn>(null!);
  const [successSignUp] = useState(false);

  async function handleSignIn(data: SignIn): Promise<string | User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user;

      if (user) {
        localStorage.setItem("appGameUser", JSON.stringify(user));
      }

      return user;
    } catch (error) {
      throw new Error("Não foi possível fazer o login. Tente novamente mais tarde.");
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
      throw new Error("Não foi possível fazer o cadastro. Tente novamente mais tarde.");
    }
  }

  return (
    <AuthContext.Provider
      value={{ signData, successSignUp, setSignData, handleSignIn, handleSignOut, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
