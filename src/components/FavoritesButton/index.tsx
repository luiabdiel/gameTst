import { useFavorite } from "../../hooks";
import * as S from "./styles";

export function FavoritesButton() {
  const { favorites, onFavorites, setOnFavorites } = useFavorite();

  return (
    <S.Button
      onClick={() => setOnFavorites(!onFavorites)}
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
