import { Header, Home } from "./components";
import { AppProvider } from "./context";
import "./styles/global.scss";

export function App() {
  return (
    <AppProvider>
      <Header />
      <Home />
    </AppProvider>
  );
}
