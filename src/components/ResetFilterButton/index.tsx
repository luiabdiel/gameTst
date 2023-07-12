import { useCards } from "../../hooks/useCards";
import * as S from "./styles";

export function ResetFilterButton() {
  const { setGames, initialDataGames, setDataGames } = useCards();

  function handleResetFilter() {
    setGames(initialDataGames);
    setDataGames(initialDataGames);
  }

  return (
    <S.ResetButton onClick={handleResetFilter}>Limpar Filtros</S.ResetButton>
  );
}
