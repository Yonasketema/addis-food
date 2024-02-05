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
      toast.success("Account successfully Login!");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return { login, isPending, isIdle };
}
