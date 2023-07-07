import { createContext, useState } from "react";
import { GameData } from "../interface/GameData";

type FavoriteContextProps = {
  favorites: GameData[];
  onFavorites: boolean;
  setFavorites: React.Dispatch<React.SetStateAction<GameData[]>>;
  setOnFavorites: (value: boolean) => void;
};

const FavoriteContext = createContext<FavoriteContextProps>(
  {} as FavoriteContextProps
);

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<GameData[]>([]);
  const [onFavorites, setOnFavorites] = useState(false);

  return (
    <FavoriteContext.Provider
      value={{ favorites, onFavorites, setFavorites, setOnFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
