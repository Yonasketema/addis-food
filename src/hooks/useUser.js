import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../apis/authApi";

export function useUser(enabled) {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
    enabled,
  });
  return { isLoading, error, user };
}
