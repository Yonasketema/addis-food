import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createRestaurant } from "../apis/restaurantApi";
import { useNavigate } from "react-router-dom";

export function useCreatePlace() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createPlace, isPending: isCreating } = useMutation({
    mutationFn: createRestaurant,
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("New Place successfully created");
      queryClient.invalidateQueries({
        queryKey: ["user-restaurant"],
      });
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createPlace };
}
