import { createContext, useState, useEffect } from "react";
import { GameData } from "../interface/GameData";
import { getFavorites, updateFavorites } from "../services/db";

type FavoriteContextProps = {
  favorites: GameData[];
  onFavorites: boolean;
  setFavorites: React.Dispatch<React.SetStateAction<GameData[]>>;
  setOnFavorites: (value: boolean) => void;
  getFavoritesList: (uid: string) => void;
  addFavorite: (uid: string, game: GameData) => void;
  removeFavorite: (uid: string, title: string) => void;
};

const FavoriteContext = createContext<FavoriteContextProps>(
  {} as FavoriteContextProps
);

let favoritesList: GameData[];

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<GameData[]>([]);
  const [onFavorites, setOnFavorites] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("appGameUser");
    const uid = user && JSON.parse(user).uid;

    if (uid) {
      getFavoritesList(uid);
    }
  }, []);

  async function getFavoritesList(uid: string) {
    favoritesList = await getFavorites(uid);
    favoritesList[0].genre && setFavorites(favoritesList);
  }

  async function addFavorite(uid: string, game: GameData) {
    const newFavoritesList = [...favorites, game];
    setFavorites(newFavoritesList);

    updateFavorites(uid, newFavoritesList);
  }

  async function removeFavorite(uid: string, title: string) {
    const updatedFavorites = favorites.filter((game) => game.title !== title);
    setFavorites(updatedFavorites);

    updateFavorites(uid, updatedFavorites);
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        onFavorites,
        setFavorites,
        setOnFavorites,
        getFavoritesList,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
