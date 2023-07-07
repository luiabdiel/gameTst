import { FavoriteProvider } from "./FavoritesContext";
import { InputSearchProvider } from "./InputSearchContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <InputSearchProvider>
      <FavoriteProvider>{children}</FavoriteProvider>
    </InputSearchProvider>
  );
};
