import { GameData } from "../../interface/GameData";
import S from "./SelectCategory.module.scss";

interface SelectCategoryProps {
  gameData: GameData[];
  setFilteredByCategory: React.Dispatch<React.SetStateAction<string>>;
  filteredByCategory: string;
}

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
    <div className={S["container"]}>
      <select
        name="select"
        onChange={(e) => handleCategory(e.target.value)}
        value={filteredByCategory}
      >
        <option value="">Select a category</option>
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
