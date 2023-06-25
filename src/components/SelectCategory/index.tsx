import { GameData } from "../../interface/GameData";

interface SelectCategoryProps {
  gameData: GameData[];
}

export function SelectCategory({ gameData }: SelectCategoryProps) {
  const allCategories = gameData.map((game) => {
    return game.genre;
  });

  const uniqueCategories = [...new Set(allCategories)];

  return (
    <div>
      <select name="select" id="">
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
