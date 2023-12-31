import { AppProvider } from "./context/index.tsx";
import { Router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "./styles/index.ts";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Router />
        </AppProvider>
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
