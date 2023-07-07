import { useEffect } from "react";
import { FavoriteIcon, UnfavoriteIcon } from "..";
import { useFavorite } from "../../hooks";
import { GameData } from "../../interface/GameData";
import S from "./index.module.scss";

export function Cards({ thumbnail, title, genre }: GameData) {
  const { favorites, setFavorites } = useFavorite();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  function addFavorite(newGame: GameData) {
    const updatedFavorites = [...favorites, newGame];
    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  function removeFavorite() {
    const updatedFavorites = favorites.filter((game) => game.title !== title);
    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  const isFavorite = favorites && favorites.some((game) => game.title === title);

  return (
    <div className={S["container"]}>
      <div className={S["content"]}>
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
      </div>
    </div>
  );
}
