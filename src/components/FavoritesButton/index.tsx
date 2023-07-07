import { useFavorite } from "../../hooks";
import S from "./index.module.scss";

export function FavoritesButton() {
  const { favorites, onFavorites, setOnFavorites } = useFavorite();

  return (
    <button
      className={S["button"]}
      onClick={() => setOnFavorites(!onFavorites)}
    >
      Favoritos{" "}
      {favorites && favorites.length > 0 ? (
        <span className={S["span"]}>{favorites.length}</span>
      ) : (
        ""
      )}
    </button>
  );
}
