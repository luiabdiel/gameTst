import { useNavigate } from "react-router-dom";
import { useFavorite } from "../../hooks";
import { useCards } from "../../hooks/useCards";
import { useFilter } from "../../hooks/useFilter";
import * as S from "./styles";

export function FavoritesButton() {
  const { favorites, setOnFavorite, onFavorite } = useFavorite();
  const { favoriteFilter } = useFilter();
  const { setDataGames } = useCards();
  const navigate = useNavigate();

  function handleFavorite() {
    if(localStorage.getItem("appGameUser")) {
      setOnFavorite(!onFavorite);
      favoriteFilter();
      setDataGames(favorites);
    } else {
      alert("Você precisa estar logado para visualizar os seus favoritos")
      navigate("/auth")
    }
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
