import { useFavorite, useInputSearch } from "../../hooks";
import { useCards } from "../../hooks/useCards";
import { UsePage } from "../../hooks/usePage";
import * as S from "./styles";

export function ResetFilterButton() {
  const {
    initialDataGames,
    setDataGames,
    setItemOffset,
    setCategory,
  } = useCards();
  const { resetPage } = UsePage();

  const { setInputFilter } = useInputSearch();
  const { setOnFavorite } = useFavorite();

  function handleResetFilter() {
    setItemOffset(0);
    resetPage();
    setDataGames(initialDataGames);
    setCategory("");
    setInputFilter("");
    setOnFavorite(false);
  }

  return (
    <S.ResetButton onClick={handleResetFilter}>Limpar Filtros</S.ResetButton>
  );
}
