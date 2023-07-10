import { useEffect, useState } from "react";
import { useFavorite, useInputSearch } from "../../hooks";
import { GameData } from "../../interface/GameData";
import { Cards, ErrorMessage, Loading, SelectCategory } from "..";
import { useCards } from "../../hooks/useCards";
import * as S from "./styles";

export function Main() {
  const [onInputFilter, setOnInputFilter] = useState(false);
  const [onCategoryFilter, setOnCategoryFilter] = useState(false);
  const [filteredByCategory, setFilteredByCategory] = useState("");
  const [filteredGamesByCategories, setFilteredGamesByCategories] = useState<
    GameData[]
  >([
    {
      id: 0,
      genre: "",
      thumbnail: "",
      title: "",
    },
  ]);
  const [filteredGamesByInputSearch, setFilteredGamesByInputSearch] = useState<
    GameData[]
  >([
    {
      id: 0,
      genre: "",
      thumbnail: "",
      title: "",
    },
  ]);
  const { inputFilter } = useInputSearch();
  const { favorites, onFavorites } = useFavorite();
  const { dataGames, isLoading, error } = useCards();
  const gameList = dataGames?.slice(0, 27);

  useEffect(() => {
    if (filteredByCategory.length > 0) {
      setOnCategoryFilter(true);

      if (dataGames) {
        const filtereds = dataGames.filter(
          (game) => game.genre === filteredByCategory
        );

        setFilteredGamesByCategories(filtereds);
      }
    } else {
      setOnCategoryFilter(false);
    }

    if (inputFilter.length > 0) {
      setOnInputFilter(true);

      if (dataGames) {
        const filtereds = dataGames.filter((game) =>
          game.title.toLowerCase().includes(inputFilter.toLowerCase())
        );

        setFilteredGamesByInputSearch(filtereds);
      }
    } else {
      setOnInputFilter(false);
    }
  }, [filteredByCategory, inputFilter]);

  return (
    <S.Container>
      {isLoading && <Loading />}

      {error ? <ErrorMessage error={error} /> : <></>}
      {!error && dataGames ? (
        <SelectCategory
          gameData={dataGames}
          setFilteredByCategory={setFilteredByCategory}
          filteredByCategory={filteredByCategory}
        />
      ) : (
        <></>
      )}
      <S.ContentGrid>
        {!error &&
          dataGames &&
          !onCategoryFilter &&
          !onInputFilter &&
          !onFavorites &&
          gameList?.map((gameData) => (
            <Cards
              key={gameData.id}
              thumbnail={gameData.thumbnail}
              title={gameData.title}
              genre={gameData.genre}
            />
          ))}
        {!error &&
          dataGames &&
          onCategoryFilter &&
          filteredGamesByCategories?.map((gameData) => (
            <Cards
              key={gameData.id}
              thumbnail={gameData.thumbnail}
              title={gameData.title}
              genre={gameData.genre}
            />
          ))}
        {!error &&
          dataGames &&
          onInputFilter &&
          filteredGamesByInputSearch?.map((gameData) => (
            <Cards
              key={gameData.id}
              thumbnail={gameData.thumbnail}
              title={gameData.title}
              genre={gameData.genre}
            />
          ))}
        {!error &&
          dataGames &&
          onFavorites &&
          favorites
            ?.slice()
            .reverse()
            .map((gameData, index) => (
              <Cards
                key={index}
                thumbnail={gameData.thumbnail}
                title={gameData.title}
                genre={gameData.genre}
              />
            )
          )}
      </S.ContentGrid>
    </S.Container>
  );
}
