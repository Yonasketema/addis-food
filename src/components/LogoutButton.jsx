import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { deleteLocalStorage } from "../utils/LocalSorage";

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
