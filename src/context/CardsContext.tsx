import { createContext } from "react";
import { useGameData } from "../hooks";
import { GameData } from "../interface/GameData";
import { AxiosError } from "axios";

type CardsDataContextType = {
  dataGames: GameData[];
  isLoading: boolean;
  error: AxiosError<unknown, any>
};

let dataGames: GameData[];

const CardsDataContext = createContext<CardsDataContextType>(
  {} as CardsDataContextType
);

const CardsDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useGameData();

  if (data) {
    dataGames = data;
  }

  return (
    <CardsDataContext.Provider value={{ dataGames, isLoading, error }}>
      {children}
    </CardsDataContext.Provider>
  );
};

export { CardsDataContext, CardsDataProvider };
