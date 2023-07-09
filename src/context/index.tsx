import { FavoriteProvider } from "./FavoritesContext";
import { InputSearchProvider } from "./InputSearchContext";
import { AuthProvider } from "./AuthContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <InputSearchProvider>
        <FavoriteProvider>{children}</FavoriteProvider>
      </InputSearchProvider>
    </AuthProvider>
  );
};
