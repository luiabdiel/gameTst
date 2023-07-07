import { FavoritesButton, InputSearch } from "..";
import S from "./index.module.scss";

export function Header() {
  return (
    <header>
      <div className={S["content"]}>
        <h1>App Masters Games</h1>
        <div className={S["btn-group"]}>
          <FavoritesButton />
          <InputSearch />
        </div>
      </div>
    </header>
  );
}
