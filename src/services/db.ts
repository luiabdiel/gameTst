import { child, get, ref, set, update } from "firebase/database";
import { database } from "./firebaseConfig";
import { AppUser } from "../@types/appUser";
import { GameData } from "../interface/GameData";
import { Rating } from "../@types/rating";

export async function getAllUsers() {
  let users;

  const snapshot = await get(child(ref(database), `users/`));

  if (snapshot.exists()) {
    users = snapshot.val();

    return users;
  } else {
    alert("No data available");
  }
}

export async function getUser(uid: string) {
  let user;

  const snapshot = await get(child(ref(database), `users/${uid}/favorites`));

  if (snapshot.exists()) {
    user = snapshot.val();

    return user;
  } else {
    alert("No data available");
  }
}

export async function updateUser(uid: string, userData: AppUser) {
  const updates: any = {};

  updates[`users/${uid}`] = userData;

  const updateUser = await update(ref(database), updates)
    .then(() => {
      return "User updated successfully";
    })
    .catch(() => {
      return "Error updating user";
    });

  return updateUser;
}

export async function updateFavorites(uid: string, favorites: GameData[]) {
  const updates: any = {};

  updates[`users/${uid}/favorites`] = favorites;

  const updateFavorites = await update(ref(database), updates)
    .then(() => {
      return "User updated successfully";
    })
    .catch(() => {
      return "Error updating user";
    });

  return updateFavorites;
}

export async function createUser(userData: AppUser) {
  const response = set(ref(database, `users/${userData.uid}`), userData)
    .then(() => {
      return "User created successfully";
    })
    .catch(() => {
      return "Error creating user";
    });

  return response;
}

export async function getFavorites(uid: string): Promise<GameData[]> {
  const emptyGameData = [
    {
      id: 0,
      genre: "",
      thumbnail: "",
      title: "",
    },
  ];

  let favorites;

  try {
    const response = await get(child(ref(database), `users/${uid}/favorites`));

    favorites = Object.values(response.val()) as GameData[];

    return favorites;
  } catch (error) {
    return emptyGameData;
  }
}

export async function getRatings(uid: string): Promise<Rating[]> {
  let ratings;

  const emptyGameData = [
    {
      title: "",
      rate: 0,
    },
  ];

  try {
    const response = await get(child(ref(database), `users/${uid}/ratings`));

    ratings = Object.values(response.val()) as Rating[];

    return ratings;
  } catch (error) {
    return emptyGameData;
  }
}

export async function updateRatings(uid: string, ratings: Rating[]) {
  const updates: any = {};

  updates[`users/${uid}/ratings`] = ratings;

  const updateRatings = await update(ref(database), updates)
    .then(() => {
      return "User updated successfully";
    })
    .catch(() => {
      return "Error updating user";
    });

  return updateRatings;
}
