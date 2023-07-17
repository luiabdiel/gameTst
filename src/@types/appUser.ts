import { GameData } from "../interface/GameData";
import { Rating } from "./rating";

export type AppUser = {
  uid: string;
  name: string;
  email: string;
  favorites: GameData[];
  ratings: Rating[]
}
