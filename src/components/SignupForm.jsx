import { useForm } from "react-hook-form";
import Form from "./Form";
import FormRow from "./FormRow";
import Input from "./Input";
import Button from "./Button";

import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import SpinnerMini from "./SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { signup, isPending } = useSignup();

  const { errors } = formState;

  function onSubmit({ name, email, password, passwordConfirm }) {
    signup(
      { name, email, password, passwordConfirm },
      {
        onSettled: () => {
          reset();
        },
        onSuccess: (user) => {
          navigate("/dashboard");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isPending}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isPending}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="password Confirm"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          disabled={isPending}
          style={{
            width: "80%",
            textAlign: "center",
            margin: "0 auto",
            fontSize: "1.7rem",
          }}
        >
          {!isPending ? "Sign up" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
