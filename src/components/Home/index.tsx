import { useEffect, useState } from "react";
import { useGameData } from "../../hooks/useGameData";
import { Cards, SelectCategory } from "..";
import S from "./home.module.scss";
import { GameData } from "../../interface/GameData";
import { InputSearch } from "../InputSearch";

export function Home() {
  const [filteredByCategory, setFilteredByCategory] = useState("");
  const [inputFilter, setInputFilter] = useState("");
  const [onInputFilter, setOnInputFilter] = useState(false);
  const [onCategoryFilter, setOnCategoryFilter] = useState(false);
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
      console.log('apagou')
      setOnInputFilter(false);
    }
  }, [filteredByCategory, inputFilter]);

  return (
    <section className={S["container"]}>
      {isLoading && <p>Carregando...</p>}

      {error &&
      // @ts-ignore
      error.response &&
      // @ts-ignore
      errorCodes.includes(error.response.status) ? (
        <p>O servidor falhou em responder, tente recarregar a página</p>
      ) : (
        <></>
      )}
      {error &&
      // @ts-ignore
      error.response &&
      // @ts-ignore
      errorCodes.indexOf(error.response.status) === -1 ? (
        <p>
          O servidor não conseguirá responder por agora, tente voltar novamente
          mais tarde
        </p>
      ) : (
        <></>
      )}
      {
        // @ts-ignore
        error && error.message === "timeout of 5000ms exceeded" ? (
          <p>O servidor demorou para responder, tente mais tarde</p>
        ) : (
          <></>
        )
      }
      {!error && data ? (
        <div className={S["filter-container"]}>
          <SelectCategory
            gameData={data}
            setFilteredByCategory={setFilteredByCategory}
            filteredByCategory={filteredByCategory}
          />
          <InputSearch setInputFilter={setInputFilter} />
        </div>
      ) : (
        <></>
      )}
      <div className={S["container-grid"]}>
        {!error &&
          data &&
          !onCategoryFilter &&
          !onInputFilter &&
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
      </div>
    </section>
  );
}
