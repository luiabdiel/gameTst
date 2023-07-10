import { useEffect, useState } from "react";
import { useGameData } from "../../hooks/useGameData";
import { useFavorite, useInputSearch } from "../../hooks";
import { GameData } from "../../interface/GameData";
import { Cards, ErrorMessage, Loading, SelectCategory } from "..";
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
  const { data, error, isLoading } = useGameData();
  const gameList = data?.slice(0, 27);

  useEffect(() => {
    if (filteredByCategory.length > 0) {
      setOnCategoryFilter(true);

      if (data) {
        const filtereds = data.filter(
          (game) => game.genre === filteredByCategory
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
  }, [filteredByCategory, inputFilter]);

  return (
    <S.Container>
      {isLoading && <Loading />}

      {error ? <ErrorMessage error={error} /> : <></>}
      {!error && data ? (
        <SelectCategory
          gameData={data}
          setFilteredByCategory={setFilteredByCategory}
          filteredByCategory={filteredByCategory}
        />
      ) : (
        <></>
      )}
      <S.ContentGrid>
        {!error &&
          data &&
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
          data &&
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
          data &&
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
          data &&
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
