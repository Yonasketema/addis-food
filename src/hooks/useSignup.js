import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../apis/authApi";

export function useSignup() {
  const queryClient = useQueryClient();
  const {
    mutate: signup,
    isPending,
    isIdle,
  } = useMutation({
    mutationFn: ({ name, email, password, passwordConfirm }) =>
      signupApi({ name, email, password, passwordConfirm }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Account successfully created!");
    },
  });

  return { signup, isPending, isIdle };
}
