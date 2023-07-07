import { GameData } from "../../interface/GameData";
import S from "./index.module.scss";

export type SelectCategoryProps = {
  gameData: GameData[];
  setFilteredByCategory: React.Dispatch<React.SetStateAction<string>>;
  filteredByCategory: string;
};

export function SelectCategory({
  gameData,
  setFilteredByCategory,
  filteredByCategory,
}: SelectCategoryProps) {
  const allCategories = gameData.map((game) => {
    return game.genre;
  });

  const uniqueCategories = [...new Set(allCategories)];

  function handleCategory(category: string) {
    setFilteredByCategory(category);
  }

  return (
    <select
      className={S["container"]}
      name="select"
      onChange={(e) => handleCategory(e.target.value)}
      value={filteredByCategory}
    >
      <option value="">Selecione a categoria</option>
      {uniqueCategories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
