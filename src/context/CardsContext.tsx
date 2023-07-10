import { createContext, useEffect, useState } from "react";
import { useGameData, useInputSearch } from "../hooks";
import { GameData } from "../interface/GameData";
import { AxiosError } from "axios";

type CardsDataContextType = {
  dataGames: GameData[];
  allCategories: string[];
  isLoading: boolean;
  error: AxiosError<unknown, any>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const emptyGameData = [
  {
    id: 0,
    genre: "",
    thumbnail: "",
    title: "",
  },
];

let dataGames: GameData[];
let allCategories: string[];

const CardsDataContext = createContext<CardsDataContextType>(
  {} as CardsDataContextType
);

const CardsDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useGameData();
  const [filteredGamesByCategories, setFilteredGamesByCategories] =
    useState<GameData[]>(emptyGameData);
  const [category, setCategory] = useState("");
  const [onCategoryFilter, setOnCategoryFilter] = useState(false);
  const [onInputFilter, setOnInputFilter] = useState(false);
  const [filteredGamesByInputSearch, setFilteredGamesByInputSearch] = useState<
  GameData[]
>(emptyGameData);

  const { inputFilter } = useInputSearch();

  if (data) {

    allCategories = data.map((game) => {
      return game.genre;
    });

    if(!onInputFilter && !onCategoryFilter) {
      dataGames = data;
    }

    if(onCategoryFilter) {
      dataGames = filteredGamesByCategories;
    }

    if(onInputFilter) {
      dataGames = filteredGamesByInputSearch;
    }
  }

  useEffect(() => {
    if (category.length > 0) {
      setOnCategoryFilter(true);

      if (data) {
        const filtereds = data.filter(
          (game) => game.genre === category
        );

        setFilteredGamesByCategories(filtereds);
      }
    } else {
      setOnCategoryFilter(false);
    }

    if (inputFilter.length > 0) {
      setOnInputFilter(true);

      if (data) {
        const filtereds = data.filter((game) =>
          game.title.toLowerCase().includes(inputFilter.toLowerCase())
        );

        setFilteredGamesByInputSearch(filtereds);
      }
    } else {
      setOnInputFilter(false);
    }
  }, [category, inputFilter, data]);

  return (
    <CardsDataContext.Provider value={{ dataGames, allCategories, category, isLoading, error, setCategory }}>
      {children}
    </CardsDataContext.Provider>
  );
};

export { CardsDataContext, CardsDataProvider };
