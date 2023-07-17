import { createContext, useEffect, useState } from "react";
import { useFavorite, useGameData } from "../hooks";
import { GameData } from "../interface/GameData";
import { AxiosError } from "axios";

type CardsDataContextType = {
  dataGames: GameData[];
  allCategories: string[];
  isLoading: boolean;
  error: AxiosError<unknown, any>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  games: GameData[];
  setGames: React.Dispatch<React.SetStateAction<GameData[]>>;
  setDataGames: React.Dispatch<React.SetStateAction<GameData[]>>;
  initialDataGames: GameData[];
  sortMode: string;
  setSortMode: React.Dispatch<React.SetStateAction<string>>;
  itemOffset: number;
  setItemOffset: React.Dispatch<React.SetStateAction<number>>;
};

let allCategories: string[];

const CardsDataContext = createContext<CardsDataContextType>(
  {} as CardsDataContextType
);

const CardsDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useGameData();
  const [dataGames, setDataGames] = useState<GameData[]>([]);
  const [games, setGames] = useState<GameData[]>([]);
  const [category, setCategory] = useState("");
  const [initialDataGames, setInitalDataGames] = useState<GameData[]>(null!);
  const [itemOffset, setItemOffset] = useState(0);
  const [sortMode, setSortMode] = useState("");

  const { ratings } = useFavorite();

  if (data) {
    allCategories = data.map((game) => {
      return game.genre;
    });
  }

  useEffect(() => {
    if (data) {
      const newData = insertRating(data);

      setDataGames(newData);
      setInitalDataGames(newData);
      setGames(newData);
    }

    function insertRating(data: GameData[]) {
      const gameDataWithRate = data.map((gameWithoutRate) => {
        const gameRating =
          ratings &&
          ratings.filter((game) => game.title === gameWithoutRate.title);
        if (gameRating.length > 0) {
          const gameWithRate: GameData = {
            ...gameWithoutRate,
            rate: gameRating[0].rate,
          };
          return gameWithRate;
        } else {
          return {
            ...gameWithoutRate,
            rate: 0,
          };
        }
      });

      return gameDataWithRate;
    }
  }, [data]);

  return (
    <CardsDataContext.Provider
      value={{
        dataGames,
        allCategories,
        category,
        isLoading,
        error,
        setCategory,
        games,
        setGames,
        setDataGames,
        initialDataGames,
        setSortMode,
        sortMode,
        itemOffset,
        setItemOffset
      }}
    >
      {children}
    </CardsDataContext.Provider>
  );
};

export { CardsDataContext, CardsDataProvider };
