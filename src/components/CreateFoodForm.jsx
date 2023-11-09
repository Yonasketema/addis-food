import styled from "styled-components";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import FileInput from "./FileInput";
import Textarea from "./Textarea";
import { createMenuFood, editMenuFood } from "../apis/foodApi";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
  S &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateFoodForm({ onCloseModal, food = {} }) {
  const { _id: editId, name, price, description } = food;
  const isEditForm = Boolean(editId);
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditForm ? { name, regularPrice: price, description } : {},
  });

  const { mutate: createFood } = useMutation({
    mutationFn: (food) => createMenuFood(food),
    onSuccess: () => {
      toast.success("Food Succesfuly Created");
      queryClient.invalidateQueries({
        queryKey: ["Menu"],
      });
      reset();
      onCloseModal?.();
    },
    onError: () => {
      toast.error("Error creating Food");
    },
  });

  const { mutate: editFood } = useMutation({
    mutationFn: ({ newFood, id }) => editMenuFood(newFood, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Menu"],
      });
      toast.success("Food Succesfuly Edit");
      onCloseModal?.();
    },
    onError: () => {
      toast.error("Error Editing Food");
    },
  });

  function onSubmit(data) {
    console.log({ newFood: data, id: editId });
    if (isEditForm) editFood({ newFood: data, id: editId });
    else createFood(data);
  }
  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Food name</Label>
        <Input type="text" id="name" {...register("name")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="discountPrice"> Discount Price</Label>
        <Input
          type="number"
          id="discountPrice"
          defaultValue={0}
          {...register("discountPrice")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Food photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>{isEditForm ? "Edit Food" : "Add New Food"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateFoodForm;
