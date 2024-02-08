import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import { deleteLocalStorage, localStorageKey } from "../lib/localStorage";

function LogoutButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
        deleteLocalStorage(localStorageKey);
      }}
    >
      Log out
    </Button>
  );
}

export default LogoutButton;
