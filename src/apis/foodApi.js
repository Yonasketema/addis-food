import apiClient from "./api-client";
import { getLocalStorage } from "../lib/LocalSorage";

const localStorageKey = "addis-auth-token";

export async function getMenu(restaurant_id) {
  const { data } = await apiClient.get(`/restaurants/${restaurant_id}/foods`);

  return data;
}

export async function createMenuFood(food) {
  return await apiClient.post("/foods", {
    image:
      "https://static.wixstatic.com/media/fa00aa_aa33952ed1b940d983e93cf464e942c8~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa00aa_aa33952ed1b940d983e93cf464e942c8~mv2.jpg",
    name: food.name,
    price: food.regularPrice,
    description: food.description,
    discountPrice: food.discountPrice,
    restaurant: food.restaurant_id,
  });
}

export async function editMenuFood(newFood, id) {
  return await apiClient.patch(`/foods/${id}`, {
    name: newFood.name,
    price: newFood.regularPrice,
    description: newFood.description,
    discountPrice: newFood.discountPrice,
  });
}

export async function deleteFood(id) {
  return await apiClient.delete(`/foods/${id}`);
}

export async function createFoodReview({ food_id, rating, comment }) {
  const session = getLocalStorage(localStorageKey);

  console.log({ food_id, rating, comment });

  if (!session.session) return null;

  return await apiClient.post(
    `/foods/${food_id}/reviews`,
    {
      rating,
      comment,
    },
    {
      headers: { Authorization: `Bearer ${session.session.token}` },
    }
  );
}
