import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { login as loginApi } from "../apis/authApi";

export function useLogin() {
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending,
    isIdle,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Account successfully created!");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending, isIdle };
}
