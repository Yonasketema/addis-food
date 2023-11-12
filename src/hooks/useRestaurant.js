import { useQuery } from "@tanstack/react-query";
import { getCurrentUserRestaurant } from "../apis/restaurantApi";

export function useRestaurant() {
  const {
    isLoading,
    data: userRestaurant,
    error,
  } = useQuery({
    queryKey: ["user-restaurant"],
    queryFn: getCurrentUserRestaurant,
  });

  return { isLoading, error, userRestaurant };
}
