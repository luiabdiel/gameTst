import { useFavorite } from "../../hooks";
import { useCards } from "../../hooks/useCards";
import { useFilter } from "../../hooks/useFilter";
import * as S from "./styles";

export function FavoritesButton() {
  const { favorites, setOnFavorite } = useFavorite();
  const { favoriteFilter } = useFilter();
  const { setDataGames } = useCards();

  function handleFavorite() {
    setOnFavorite(true);
    favoriteFilter();
    setDataGames(favorites);
  }

  return (
    <S.Button onClick={handleFavorite}>
      Favoritos
      {favorites && favorites.length > 0 ? (
        <S.Span>{favorites.length}</S.Span>
      ) : (
        ""
      )}
    </S.Button>
  );
}
