import apiClient from "./api-client";

const foodUrl = "/food/restaurantfoods?restaurant=63b5847bc452ad2747bbbbcf";

export async function getMenu() {
  return await apiClient.get(foodUrl);
}

export async function createMenuFood(food) {
  return await apiClient.post("/food", {
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
  return await apiClient.patch(`/food/${id}`, {
    name: newFood.name,
    price: newFood.regularPrice,
    description: newFood.description,
    discountPrice: newFood.discountPrice,
  });
}

export async function deleteFood(id) {
  return await apiClient.delete(`/food/${id}`);
}
