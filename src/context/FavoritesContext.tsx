import { createContext, useState, useEffect } from "react";
import { GameData } from "../interface/GameData";
import {
  getFavorites,
  getRatings,
  updateFavorites,
  updateRatings,
} from "../services/db";
import { Rating } from "../@types/rating";
import { useCards } from "../hooks/useCards";

type FavoriteContextProps = {
  favorites: GameData[];
  setFavorites: React.Dispatch<React.SetStateAction<GameData[]>>;
  getFavoritesList: (uid: string) => void;
  addFavorite: (uid: string, game: GameData) => void;
  removeFavorite: (uid: string, title: string) => void;
  ratings: Rating[];
  setRatings: React.Dispatch<React.SetStateAction<Rating[]>>;
  addRating: (uid: string, rating: Rating) => void;
};

const FavoriteContext = createContext<FavoriteContextProps>(
  {} as FavoriteContextProps
);

let favoritesList: GameData[];
let ratingsList: Rating[];

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<GameData[]>([]);
  const [ratings, setRatings] = useState<Rating[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("appGameUser");
    const uid = user && JSON.parse(user).uid;

    if (uid) {
      getRatingsList(uid);
      getFavoritesList(uid);
    }
  }, []);

  function insertRating(data: GameData[]) {
    const gameDataWithRate = data.map((gameWithoutRate) => {
      const gameRating =
        ratingsList &&
        ratingsList.filter((game) => game.title === gameWithoutRate.title);
      if (gameRating.length > 0) {
        console.log("entrou no if")
        const gameWithRate: GameData = {
          ...gameWithoutRate,
          rate: gameRating[0].rate,
        };
        return gameWithRate;
      } else {
        console.log(ratings)
        console.log("entrou no else")
        return {
          ...gameWithoutRate,
          rate: 0,
        };
      }
    });

    return gameDataWithRate;
  }

  async function getFavoritesList(uid: string) {
    favoritesList = await getFavorites(uid);
    const newFavoriteList = insertRating(favoritesList);
    favoritesList[0].genre && setFavorites(newFavoriteList);
  }

  async function getRatingsList(uid: string) {
    ratingsList = await getRatings(uid);
    ratingsList[0].title && setRatings(ratingsList);
  }

  async function addRating(uid: string, rating: Rating) {
    const newItemToRatingList: Rating[] = [];

    const updateRating = ratings.find((item) => (item.title === rating.title));

    if (updateRating) {
      updateRating.rate = rating.rate;
    } else {
      newItemToRatingList.push(rating);
    }

    const newRatingsList = [...ratings, ...newItemToRatingList];
    setRatings(newRatingsList);
    updateRatings(uid, newRatingsList);
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
        setFavorites,
        getFavoritesList,
        addFavorite,
        removeFavorite,
        ratings,
        setRatings,
        addRating,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
