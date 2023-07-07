import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoritesContext";

const useFavorite = () => {
  const context = useContext(FavoriteContext);

  return context;
};

export { useFavorite };
