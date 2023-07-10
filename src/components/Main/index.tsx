import { useFavorite } from "../../hooks";
import { Cards, ErrorMessage, Loading, SelectCategory } from "..";
import { useCards } from "../../hooks/useCards";
import * as S from "./styles";

export function Main() {
  const { favorites, onFavorites } = useFavorite();
  const { dataGames, isLoading, error } = useCards();
  const gameList = dataGames?.slice(0, 27);

  return (
    <S.Container>
      {isLoading && <Loading />}

      {error ? <ErrorMessage error={error} /> : <></>}
      {!error && dataGames ? (
        <SelectCategory />
      ) : (
        <></>
      )}
      <S.ContentGrid>
        {!error &&
          dataGames &&
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
