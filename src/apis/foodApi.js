import apiClient from "./api-client";
import { getLocalStorage, localStorageKey } from "../lib/localStorage";
import supabase, { supabaseUrl } from "./supabase";

export async function getMenu(restaurant_id) {
  const { data } = await apiClient.get(`/restaurants/${restaurant_id}/foods`);

  return data;
}

export async function createMenuFood(food) {
  console.log(food);

  const imageName = `${Math.random()}-${food.image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/food-image/${imageName}`;

  const newFood = await apiClient.post("/foods", {
    image: imagePath || "",
    name: food.name,
    price: food.regularPrice,
    description: food.description,
    discountPrice: food.discountPrice,
    restaurant: food.restaurant_id,
  });

  const { error } = await supabase.storage
    .from("food-image")
    .upload(imageName, food.image);

  console.log(error);

  if (error) {
    // await apiClient.delete(`/foods/${newFood.id}`);

    throw new Error("the food was not created");
  }

  return newFood;
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
