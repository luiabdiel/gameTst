import { useFavorite } from "../../hooks";
import * as S from "./styles";

export function FavoritesButton() {
  const { favorites, onFavorites, setOnFavorites } = useFavorite();

  function handleFavorite() {
    setOnFavorites(!onFavorites);
  }

  return (
    <S.Button
      onClick={handleFavorite}
    >
      Favoritos{" "}
      {favorites && favorites.length > 0 ? (
        <S.Span>{favorites.length}</S.Span>
      ) : (
        ""
      )}
    </S.Button>
  );
}
