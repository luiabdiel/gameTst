import {
  Cards,
  ErrorMessage,
  Loading,
  ResetFilterButton,
  SelectCategory,
  SortedButton,
} from "..";
import { useCards } from "../../hooks/useCards";
import * as S from "./styles";

export function Main() {
  const { games, isLoading, error } = useCards();

  return (
    <S.Container>
      {isLoading && <Loading />}

      {error ? <ErrorMessage error={error} /> : <></>}
      {!error && games ? (
        <S.FilterGroup>
          <div>
            <SelectCategory />
            <SortedButton />
          </div>
          <ResetFilterButton />
        </S.FilterGroup>
      ) : (
        <></>
      )}
      <S.ContentGrid>
        {!error &&
          games &&
          games.map((gameData, index) => (
            <Cards
              key={index}
              rate={gameData.rate ? gameData.rate : 0}
              thumbnail={gameData.thumbnail}
              title={gameData.title}
              genre={gameData.genre}
            />
          ))}
      </S.ContentGrid>
    </S.Container>
  );
}
