import { useCards } from "../useCards";
import { UsePage } from "../usePage";
import { GameData } from "./../../interface/GameData";

export const useFilter = () => {
  const { setGames, setDataGames } = useCards();
  const {resetPage} = UsePage()

  const categoryFilter = (gameData: GameData[], category: string) => {
    if (category) {
      const filtereds = gameData.filter((game) => game.genre === category);

      setDataGames(filtereds)
      resetPage()
    } else {
      setDataGames(gameData)
      resetPage()
    }
  };
  const inputFilter = (gameData: GameData[], input: string) => {
    if (input) {
      const filtereds = gameData.filter((game) =>
        game.title.toLowerCase().includes(input.toLowerCase())
      );

      setDataGames(filtereds);
      resetPage()
    } else {
      setDataGames(gameData)
      resetPage()
    }
  };

  const favoriteFilter = () => {
    resetPage()
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
        setGames(moreRated.slice(0,9))
        resetPage()
      } else if(sortMode === "title") {
        setGames(lessRated.slice(0,9))
        resetPage()
      } else {
        setGames(gameData.slice(0,9))
        resetPage()
      }
    } else {
      setGames(gameData.slice(0,9));
      resetPage()
    }
  }
  return { categoryFilter, inputFilter, favoriteFilter, sorted };
};
