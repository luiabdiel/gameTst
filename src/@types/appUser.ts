import { GameData } from "../interface/GameData";

export type AppUser = {
  uid: string;
  name: string;
  email: string;
  favorites: GameData[];
  ratings: Rating[]
}

export type Rating = {
  rate: number;
  title: string;
}
