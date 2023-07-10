import { GameData } from "../interface/GameData";

export type AppUser = {
  uid: string;
  name: string;
  email: string;
  birthDate: Date;
  favorites: GameData[];
  gifts_list: GameData[];
  ratings: Rating[]
}

export type Rating = {
  rate: number;
  title: string;
}
