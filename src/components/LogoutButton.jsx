import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import { deleteLocalStorage } from "../lib/LocalSorage";

function LogoutButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
        deleteLocalStorage("addis-auth-token");
      }}
    >
      Log out
    </Button>
  );
}

export default LogoutButton;
