import { useCards } from "../useCards";
import { GameData } from "./../../interface/GameData";

export const useFilter = () => {
  const { setGames } = useCards();

  const categoryFilter = (gameData: GameData[], category: string) => {
    if (category) {
      const filtereds = gameData.filter((game) => game.genre === category);

      setGames(filtereds);
    } else {
      setGames(gameData);
    }
  };
  const inputFilter = (gameData: GameData[], input: string) => {
    if (input) {
      const filtereds = gameData.filter((game) =>
        game.title.toLowerCase().includes(input.toLowerCase())
      );

      setGames(filtereds);
    } else {
      setGames(gameData);
    }
  };
  const favoriteFilter = (favorites: GameData[]) => {
    setGames(favorites);
  };

  const sorted = (gameData: GameData[], sortMode: string) => {
    if(gameData[0].title) {

      const moreRated = gameData.reduce((acc: GameData[], curr: GameData) => {
        const index = acc.findIndex((game) => game.rate! < curr.rate!)

        if(index === -1) {
          acc.push(curr)
        } else {
          acc.splice(index, 0, curr)
        }
        return acc
      }, [])

      const lessRated = moreRated.slice().reverse()

      if(sortMode === "rate") {
        setGames(moreRated)
      } else if(sortMode === "title") {
        setGames(lessRated)
      } else {
        setGames(gameData)
      }
    } else {
      setGames(gameData);
    }
  }
  return { categoryFilter, inputFilter, favoriteFilter, sorted };
};
