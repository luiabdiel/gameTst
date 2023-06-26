import S from "./header.module.scss";

export function Header() {
  return (
    <header>
      <h1 className={S["logo"]}>App Masters Games</h1>
    </header>
  );
}
