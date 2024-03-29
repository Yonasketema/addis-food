import styled from "styled-components";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Input from "./ui/Input";
import Form from "./ui/Form";
import Button from "./ui/Button";
import FileInput from "./ui/FileInput";
import Textarea from "./ui/Textarea";
import { createMenuFood, editMenuFood } from "../apis/foodApi";
import { useRestaurant } from "../hooks/useRestaurant";

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
  const { _id: editId, name, price, description, discountPrice } = food;
  const { userRestaurant } = useRestaurant();
  const isEditForm = Boolean(editId);
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditForm
      ? { name, regularPrice: price, description, discountPrice }
      : {},
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
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditForm) editFood({ newFood: data, id: editId });
    else
      createFood({
        ...data,
        restaurant_id: userRestaurant?.restaurant.id,
        image,
      });
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

      <FormRow label="Food image">
        <Label htmlFor="image">Food photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditForm ? false : "This field is required",
          })}
        />
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
