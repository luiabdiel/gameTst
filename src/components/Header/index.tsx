import { FavoritesButton, InputSearch } from "..";
import { StarIconEmpty } from "../Icons";
import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <div className="mask"></div>
      <S.Content>
        <h1>App Masters Games</h1>
        <StarIconEmpty />
        <S.BtnGroup>
          <FavoritesButton />
          <InputSearch />
        </S.BtnGroup>
      </S.Content>
    </S.Header>
  );
}
