import { useEffect, useState } from "react";
import { useGameData } from "../../hooks/useGameData";
import { useFavorite, useInputSearch } from "../../hooks";
import { GameData } from "../../interface/GameData";
import { Cards, ErrorMessage, Loading, SelectCategory } from "..";
import * as S from "./styles";

export function Main() {
  const { inputFilter } = useInputSearch();
  const { favorites, onFavorites } = useFavorite();

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

  const { data, error, isLoading } = useGameData();
  const gameList = data?.slice(0, 27);
  const errorCodes = [500, 502, 503, 504, 507, 508, 509];

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

      {error &&
      // @ts-ignore
      error.response &&
      // @ts-ignore
      errorCodes.includes(error.response.status) ? (
        <ErrorMessage text="O servidor falhou em responder, tente recarregar a página" />
      ) : (
        <></>
      )}
      {error &&
      // @ts-ignore
      error.response &&
      // @ts-ignore
      errorCodes.indexOf(error.response.status) === -1 ? (
        <ErrorMessage
          text="O servidor não conseguirá responder por agora, tente voltar novamente
        mais tarde"
        />
      ) : (
        <></>
      )}
      {
        // @ts-ignore
        error && error.message === "timeout of 5000ms exceeded" ? (
          <ErrorMessage text="O servidor demorou para responder, tente mais tarde" />
        ) : (
          <></>
        )
      }
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
            .map((gameData) => (
              <Cards
                key={gameData.id}
                thumbnail={gameData.thumbnail}
                title={gameData.title}
                genre={gameData.genre}
              />
            ))}
      </S.ContentGrid>
    </S.Container>
  );
}
