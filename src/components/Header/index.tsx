import S from "./header.module.scss";

export function Header() {
  return(
    <header>
      <div className={S['header-content']}>
        <h1 className={S['logo']}>GameTst</h1>
        <div>
          <select name="select" id="">
            <option value="shooter">Shooter</option>
            <option value="fighting">Fighting</option>
          </select>
          <input type="text" />
        </div>
      </div>
    </header>
  );
}
