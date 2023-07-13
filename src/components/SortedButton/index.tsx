import { useCards } from "../../hooks/useCards";
import { useFilter } from "../../hooks/useFilter";
import * as S from "./styles";

export function SortedButton() {
  const { dataGames, setSortMode, sortMode } = useCards();
  const { sorted } = useFilter();

  function handleSorted(e: React.ChangeEvent<HTMLSelectElement>) {
    sorted(dataGames, e.target.value);
    setSortMode(e.target.value);
  }

  return (
    <S.Select
      name="select"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSorted(e)}
      value={sortMode}
    >
      <option value="">Ordenar por</option>
      <option value="rate">Maior classificação</option>
      <option value="title">Menor classificação</option>
    </S.Select>
  );
}
