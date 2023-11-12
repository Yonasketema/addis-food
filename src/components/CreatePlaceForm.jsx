import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import FileInput from "./FileInput";
import Textarea from "./Textarea";
import FormRow from "./FormRow";
import { useGeolocation } from "../hooks/useGeolocation";
import { useCreatePlace } from "../hooks/useCreatePlace";
import SpinnerMini from "./SpinnerMini";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreatePlaceForm({ onCloseModal, food = {} }) {
  const { register, handleSubmit, reset } = useForm({});

  const { isCreating, createPlace } = useCreatePlace();
  const { position, getPosition } = useGeolocation();

  function onSubmit(data) {
    createPlace(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={"modal"}>
      {/* <Button onClick={getPosition}>Location</Button> */}

      <FormRow label="restaurant name">
        <Input
          type="text"
          id="restaurantName"
          // disabled={ }
          {...register("restaurantName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="log name">
        <Input
          type="text"
          id="log"
          // disabled={ }
          {...register("log", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="lat name">
        <Input
          type="text"
          id="lat"
          // disabled={ }
          {...register("lat", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Description">
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          // disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="restaurant image">
        <FileInput
          id="restaurantImage"
          accept="image/*"
          {...register("restaurantImage")}
        />
      </FormRow>

      <FormRow label="logo">
        <FileInput id="logo" accept="image/*" {...register("logo")} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>{!isCreating ? "Create" : <SpinnerMini />} </Button>
      </FormRow>
    </Form>
  );
}

export default CreatePlaceForm;
