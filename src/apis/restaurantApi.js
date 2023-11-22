import { getLocalStorage } from "../utils/LocalSorage";
import apiClient from "./api-client";

const localStorageKey = "addis-auth-token";

export async function getCurrentUserRestaurant() {
  const session = getLocalStorage(localStorageKey);

  if (!session.session) return null;

  const { data } = await apiClient.get("restaurant/user", {
    headers: { Authorization: `Bearer ${session.session.token}` },
  });

  return data;
}

export async function createRestaurant({
  restaurantName,
  image,
  logo,
  log,
  lat,
  description,
}) {
  const session = getLocalStorage(localStorageKey);

  if (!session.session) return null;

  const { data } = await apiClient.post(
    "restaurant/",
    {
      restaurantName,
      image: "http://img.com",
      logo: "http://img.com",
      log,
      lat,
      description,
    },
    {
      headers: { Authorization: `Bearer ${session.session.token}` },
    }
  );

  return data;
}
