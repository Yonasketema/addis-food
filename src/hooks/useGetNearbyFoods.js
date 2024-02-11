import { useQuery } from "@tanstack/react-query";
import { getNearbyFoods } from "../apis/foodApi";

export function useGetNearbyFoods(lat, lng) {
  const {
    isLoading,
    data: nearFoods,
    error,
  } = useQuery({
    queryKey: ["near-foods"],
    queryFn: () => getNearbyFoods(lat, lng),
    enabled: Boolean(lat && lng),
  });

  return { isLoading, error, nearFoods };
}
