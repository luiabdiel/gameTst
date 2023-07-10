import { child, get, ref, set, update } from "firebase/database";
import { database } from "./firebaseConfig";
import { AppUser } from "../@types/appUser";

export async function getAllUsers() {
  let users;

  const snapshot = await get(child(ref(database), `users/`));

  if (snapshot.exists()) {
    users = snapshot.val();

    console.log(users);

    return users;
  } else {
  alert("No data available")
  }
}

export async function getUser(uid: string) {
  let user;

  const snapshot = await get(child(ref(database), `users/${uid}/favorites`));

  if (snapshot.exists()) {
    user = snapshot.val();

    console.log(user);

    return user;
  } else {
  alert("No data available")
  }
}

export async function updateUser(uid: string, userData: AppUser) {
  const updates: any = {};

  updates[`users/${uid}`] = userData;

  const updateUser = await update(ref(database), updates)
    .then((res) => {
      return "User updated successfully";
    }).catch(() => {
      return "Error updating user";
    });

  return updateUser;
}

export async function createUser(userData: AppUser) {
  const response = set(ref(database, `users/${userData.uid}`), userData)
    .then((res) => {
    return "User created successfully";
    }).catch(() => {
    return "Error creating user";
    });

  return response;
}
