import { useCards } from "../../hooks/useCards";
import { useFilter } from "../../hooks/useFilter";
import * as S from "./styles";

export function SelectCategory() {
  const { dataGames, allCategories, category, setCategory } = useCards();
  const { categoryFilter } = useFilter();

  const uniqueCategories = [...new Set(allCategories)];

  function handleCategory(category: string) {
    categoryFilter(dataGames, category);
    setCategory(category);
  }

  return (
    <S.Select
      name="select"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        handleCategory(e.target.value)
      }
      value={category}
    >
      <option value="">Selecione a categoria</option>
      {uniqueCategories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </S.Select>
  );
}
