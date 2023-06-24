import { useGameData } from "../../hooks/useGameData";
import { Cards } from "../Cards";
import S from "./home.module.scss";

export function Home() {
  const { data, error, isLoading } = useGameData();

  const gameList = data?.slice(0, 27);
  const errorCodes = [500, 502, 503, 504, 507, 508, 509];

  return (
    <div className={S["container"]}>
      <div className={S["container-grid"]}>
        {isLoading && <p>Carregando...</p>}
        {error && error.response && errorCodes.includes(error.response.status) ? (
          <p>O servidor falhou em responder, tente recarregar a página</p>
        ) : (
          <></>
        )}
        {error && error.response && errorCodes.indexOf(error.response.status) === -1 ? (
          <p>
            O servidor não conseguirá responder por agora, tente voltar
            novamente mais tarde
          </p>
        ) : (
          <></>
        )}
        {error && error.message === "timeout of 5000ms exceeded" ? (
          <p>O servidor demorou para responder, tente mais tarde</p>
        ): <></>}
        {!error && data &&
          gameList?.map((gameData) => (
            <Cards
              key={gameData.id}
              thumbnail={gameData.thumbnail}
              title={gameData.title}
              genre={gameData.genre}
            />
          ))}
      </div>
    </div>
  );
}
