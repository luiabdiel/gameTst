import { useGameData } from "../../hooks/useGameData";
import { Cards } from "../Cards";

export function Home() {
  const { data } = useGameData();
  const gameList = data?.slice(0,27);

  return (
    <div>
      {gameList?.map((gameData) =>
        <Cards
          key={gameData.id}
          thumbnail={gameData.thumbnail}
          title={gameData.title}
          genre={gameData.genre}
        />
      )}
    </div>
  );
}
