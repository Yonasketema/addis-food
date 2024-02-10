import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createFoodReview } from "../apis/foodApi";

export function useCreateFoodReview() {
  const queryClient = useQueryClient();

  const { mutate: createReview, isPending: isCreating } = useMutation({
    mutationFn: createFoodReview,
    onSuccess: () => {
      toast.success("Thanks for you Comment");
      queryClient.invalidateQueries({
        queryKey: ["near-foods"],
      });
    },
    onError: (err) =>
      toast.error(err.response?.data.message || "Please  Login ?"),
  });

  return { isCreating, createReview };
}
