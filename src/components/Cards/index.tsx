import { GameData } from "../../interface/GameData";

export function Cards({ thumbnail, title, genre }: GameData) {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <div>
        <h2>{title}</h2>
        <span>{genre}</span>
      </div>
    </div>
  );
}
