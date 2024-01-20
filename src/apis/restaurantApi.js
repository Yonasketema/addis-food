import { getLocalStorage } from "../utils/LocalSorage";
import apiClient from "./api-client";

const localStorageKey = "addis-auth-token";

export async function getCurrentUserRestaurant() {
  const session = getLocalStorage(localStorageKey);

  if (!session.session) return null;

  const { data } = await apiClient.get("restaurants/user", {
    headers: { Authorization: `Bearer ${session.session.token}` },
  });

  return data;
}

export async function createRestaurant(newData) {
  const session = getLocalStorage(localStorageKey);

  if (!session.session) return null;

  const { data } = await apiClient.post(
    "restaurants/",
    {
      restaurantName: newData.restaurant_name,
      image: "http://img.com",
      logo: "http://img.com",
      log: newData.lng,
      lat: newData.lat,
      description: newData.description,
    },
    {
      headers: { Authorization: `Bearer ${session.session.token}` },
    }
  );

  return data;
}
