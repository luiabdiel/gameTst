import { FavoritesButton, InputSearch } from "..";
import * as S from "./styles";
// import S from "./index.module.scss";

export function Header() {
  return (
    <S.Header>
      <S.Content>
        <h1>App Masters Games</h1>
        <S.BtnGroup>
          <FavoritesButton />
          <InputSearch />
        </S.BtnGroup>
      </S.Content>
    </S.Header>
  );
}
