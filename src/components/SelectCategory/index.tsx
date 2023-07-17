import { useFavorite } from "../../hooks";
import { useCards } from "../../hooks/useCards";
import { useFilter } from "../../hooks/useFilter";
import * as S from "./styles";

export function SelectCategory() {
  const { allCategories, category, setCategory, initialDataGames } = useCards();
  const { categoryFilter } = useFilter();
  const {onFavorite, favorites} = useFavorite();

  const uniqueCategories = [...new Set(allCategories)];

  function handleCategory(category: string) {
    categoryFilter(onFavorite ? favorites : initialDataGames, category);
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
