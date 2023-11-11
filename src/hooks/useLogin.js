import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { login as loginApi } from "../apis/authApi";

export function useLogin() {
  const {
    mutate: login,
    isPending,
    isIdle,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending, isIdle };
}
