import { GameData } from "../../interface/GameData";
import S from "./cards.module.scss"

export function Cards({ thumbnail, title, genre }: GameData) {
  return (
    <div className={S['container']}>
      <div className={S['content']}>
        <img src={thumbnail} alt={title} />
          <div>
            <h2>{title}</h2>
            <p>Genre: {genre}</p>
          </div>
      </div>
    </div>
  );
}
