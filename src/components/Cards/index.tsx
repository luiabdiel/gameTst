import { FavoriteIcon, UnfavoriteIcon } from "..";
import { useFavorite } from "../../hooks";
import { GameData } from "../../interface/GameData";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { StarIconEmpty, StarIconFull } from "../Icons";
import * as S from "./styles";
import { useCards } from "../../hooks/useCards";

type CardsProps = {
  thumbnail: string;
  title: string;
  genre: string;
  rate: number;
};

export function Cards({ thumbnail, title, genre, rate }: CardsProps) {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite, addRating } = useFavorite();
  const { games, setGames } = useCards();

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

  function handleRating(rate: number) {
    if (localStorage.getItem("appGameUser")) {
      const user = localStorage.getItem("appGameUser");
      const uid = user && JSON.parse(user).uid;

      addRating(uid, { title, rate });

      const newRating = games.map((game) => {
        if (game.title === title) {
          game.rate = rate;
          return game;
        } else {
          return game;
        }
      });

      setGames(newRating);
    } else {
      alert("Você precisa estar logado para classificar um jogo");
      navigate("/auth");
    }
  }

  return (
    <S.Container>
      <div className="card-mask"></div>
      <S.Content>
        <div className="rating">
          {/* @ts-ignore */}
          <Rating
            onChange={(e) => handleRating(e)}
            initialRating={rate}
            emptySymbol={<StarIconEmpty />}
            fullSymbol={<StarIconFull />}
          />
        </div>
        <img src={thumbnail} alt={title} />
        <div className="favorite-icon">
          {isFavorite ? (
            <FavoriteIcon onClick={() => favoriteRemove(title)} />
          ) : (
            <UnfavoriteIcon
              onClick={() => newFavorite({ thumbnail, title, genre, rate })}
            />
          )}
        </div>
        <div>
          <h2>{title}</h2>
          <p>
            Gênero: <span>{genre}</span>
          </p>
        </div>
        <div className="blur-smerald"></div>
        <div className="blur-blue"></div>
      </S.Content>
    </S.Container>
  );
}
