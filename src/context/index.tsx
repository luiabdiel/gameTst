import { FavoriteProvider } from "./FavoritesContext";
import { InputSearchProvider } from "./InputSearchContext";
import { AuthProvider } from "./AuthContext";
import { CardsDataProvider } from "./CardsContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <InputSearchProvider>
      <FavoriteProvider>
        <CardsDataProvider>
          {children}
        </CardsDataProvider>
      </FavoriteProvider>
      </InputSearchProvider>
    </AuthProvider>
  );
};
