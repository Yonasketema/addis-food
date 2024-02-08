import React, { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Row from "./ui/Row";
import ButtonGroup from "./ui/ButtonGroup";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import CreateFoodForm from "./CreateFoodForm";
import { deleteFood } from "../apis/foodApi";
import PriceContainer from "./PriceContainer";

const Image = styled.img`
  width: 45%;
  height: inherit;
  object-fit: cover;
`;

const StyledRowCard = styled.div`
  display: flex;
  gap: 0.8rem;
  height: 17rem;
  border: 1px solid #ddd;
  margin-top: 0.7rem;
`;

const Container = styled.div`
  width: 100%;
  padding: 0.8rem;
`;

function RowCard({ food }) {
  const { _id, name, price, discountPrice, description, image } = food;

  const queryClient = useQueryClient();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { mutate, isPending } = useMutation({
    // mutationFn: (id) => deleteFood(id),
    mutationFn: deleteFood,
    onSuccess: () => {
      toast.dismiss("Food Succesfuly Deleted");
      queryClient.invalidateQueries({
        queryKey: ["Menu"],
      });
    },
  });

  return (
    <StyledRowCard>
      <Image src={image} />
      <Container>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <Row>
          <PriceContainer price={price} discountPrice={discountPrice} />
          <ButtonGroup>
            <Button
              onClick={() => setIsOpenModal((show) => setIsOpenModal(!show))}
            >
              Edit
            </Button>
            {isOpenModal && (
              <Modal onClose={() => setIsOpenModal(false)}>
                <CreateFoodForm
                  onCloseModal={() => setIsOpenModal(false)}
                  food={food}
                />
              </Modal>
            )}
            <Button
              variation="danger"
              onClick={() => mutate(_id)}
              disabled={isPending}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </StyledRowCard>
  );
}

export default RowCard;
