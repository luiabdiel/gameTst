import S from "./index.module.scss";

export function Auth() {
  return (
    <div className={S["container"]}>
      <div className={S["box"]}>
        <span className={S['border-line']}></span>
        <form>
          <h2>Entrar</h2>
          <div className={S['input-box']}>
            <input type="text" required />
            <span>Email</span>
            <i></i>
          </div>
          <div className={S['input-box']}>
            <input type="password" required />
            <span>Senha</span>
            <i></i>
          </div>
          <div className={S['links']}>
            <a href="#">Esqueceu sua senha?</a>
            <a href="#">Cadastre-se</a>
          </div>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </div>
  );
}
