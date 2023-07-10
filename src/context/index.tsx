import { FavoriteProvider } from "./FavoritesContext";
import { InputSearchProvider } from "./InputSearchContext";
import { AuthProvider } from "./AuthContext";
import { CardsDataProvider } from "./CardsContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <InputSearchProvider>
        <CardsDataProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </CardsDataProvider>
      </InputSearchProvider>
    </AuthProvider>
  );
};
