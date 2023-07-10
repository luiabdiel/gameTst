import { useCards } from "../../hooks/useCards";
import * as S from "./styles";

export function SelectCategory() {
  const { allCategories, category, setCategory } = useCards();

  const uniqueCategories = [...new Set(allCategories)];

  function handleCategory(category: string) {
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
