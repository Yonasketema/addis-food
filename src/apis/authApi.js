//login
//signup
//getCurrentUser()

import { getLocalStorage, setLocalStorage } from "../utils/LocalSorage";
import { apiClient } from "./foodApi";

const localStorageKey = "addis-auth-token";

export async function login({ email, password }) {
  const { data } = await apiClient.post("/users/login", {
    email,
    password,
  });

  if (!data) throw new Error("login Error");

  setLocalStorage(localStorageKey, data);

  return data;
}

export async function getCurrentUser() {
  const session = getLocalStorage(localStorageKey);

  if (!session.session) return null;

  console.log({ token: session.session.token });

  const { data } = await apiClient.get("/users/me", {
    headers: { Authorization: `Bearer ${session.session.token}` },
  });

  console.log("userrrrrr", { data });

  console.table(data);
  return data;
}
