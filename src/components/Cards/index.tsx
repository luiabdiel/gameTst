import { FavoriteIcon, UnfavoriteIcon } from "..";
import { useFavorite } from "../../hooks";
import { GameData } from "../../interface/GameData";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { StarIconEmpty, StarIconFull } from "../Icons";
import * as S from "./styles";

export function Cards({ thumbnail, title, genre }: GameData) {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavorite();

  function newFavorite(newGame: GameData) {
    if (localStorage.getItem("appGameUser")) {
      const user = localStorage.getItem("appGameUser");
      const uid = user && JSON.parse(user).uid;

      addFavorite(uid, newGame);
    } else {
      alert("Você precisa estar logado para favoritar um jogo");
      navigate("/auth");
    }
  }

  function favoriteRemove(title: string) {
    if (localStorage.getItem("appGameUser")) {
      const user = localStorage.getItem("appGameUser");
      const uid = user && JSON.parse(user).uid;

      removeFavorite(uid, title);
    } else {
      alert("Você precisa estar logado para remover um jogo");
      navigate("/auth");
    }
  }

  const isFavorite =
    favorites && favorites.some((game) => game.title === title);

  return (
    <S.Container>
      <div>
          {/* @ts-ignore */}
          <Rating
            initialRating={2}
            emptySymbol={<StarIconEmpty />}
            fullSymbol={<StarIconFull />}
          />
        </div>
      <S.Content>
        <img src={thumbnail} alt={title} />
        {isFavorite ? (
          <FavoriteIcon onClick={() => favoriteRemove(title)} />
        ) : (
          <UnfavoriteIcon
            onClick={() => newFavorite({ thumbnail, title, genre })}
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
