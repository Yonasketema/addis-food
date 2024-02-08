import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../apis/authApi";

export function useUser() {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
    retry: 1,
  });
  return { isLoading, error, user };
}
