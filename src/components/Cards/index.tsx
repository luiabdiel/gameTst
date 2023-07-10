import { useEffect } from "react";
import { FavoriteIcon, UnfavoriteIcon } from "..";
import { useFavorite, useGameData } from "../../hooks";
import { GameData } from "../../interface/GameData";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export function Cards({ thumbnail, title, genre }: GameData) {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useFavorite();
  const { data } = useGameData();

  // useEffect(() => {
  //   const storedFavorites = localStorage.getItem("favorites");

  //   if (storedFavorites) {
  //     setFavorites(JSON.parse(storedFavorites));
  //   }
  // }, []);

  function addFavorite(newGame: GameData) {
    if (localStorage.getItem("appGameUser")) {
      const updatedFavorites = [...favorites, newGame];
      setFavorites(updatedFavorites);

      // localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      alert("Você precisa estar logado para favoritar um jogo");
      navigate("/auth");
    }
  }

  function removeFavorite() {
    const updatedFavorites = favorites.filter((game) => game.title !== title);
    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  const isFavorite = favorites && favorites.some((game) => game.title === title);

  return (
    <S.Container>
      <S.Content>
        <img src={thumbnail} alt={title} />
        {isFavorite ? (
          <UnfavoriteIcon onClick={() => removeFavorite()} />
        ) : (
          <FavoriteIcon
            onClick={() => addFavorite({ thumbnail, title, genre })}
          />
        )}
        <div>
          <h2>{title}</h2>
          <p>
            Gênero: <span>{genre}</span>
          </p>
        </div>
      </S.Content>
    </S.Container>
  );
}
