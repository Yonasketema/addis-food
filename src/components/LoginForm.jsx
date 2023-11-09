import { useState } from "react";

import Input from "./Input";
import FormRowVertical from "./FormRowVertical";
import Button from "./Button";
import Form from "./Form";
import { login } from "../apis/authApi";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123@123.");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // disabled={ }
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={ }
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button
          size="large"
          // disabled={ }
        >
          Log in
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
