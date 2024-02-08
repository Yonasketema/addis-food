//login
//signup
//getCurrentUser()

import apiClient from "./api-client";
import {
  getLocalStorage,
  localStorageKey,
  setLocalStorage,
} from "../lib/localStorage";

export async function login({ email, password }) {
  const { data } = await apiClient.post("/users/login", {
    email,
    password,
  });

  if (!data) throw new Error("login Error");

  setLocalStorage(localStorageKey, data);

  return data;
}

export async function signup({ name, email, password, passwordConfirm }) {
  const { data } = await apiClient.post("/users/signup/", {
    name,
    email,
    password,
    passwordConfirm,
  });

  if (!data) throw new Error("signup Error");

  setLocalStorage(localStorageKey, data);

  return data;
}

export async function getCurrentUser() {
  const session = getLocalStorage(localStorageKey);

  if (!session.session) return null;

  const { data } = await apiClient.get("/users/me", {
    headers: { Authorization: `Bearer ${session.session.token}` },
  });

  return data;
}
