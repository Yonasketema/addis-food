import React, { useState } from "react";
import styled from "styled-components";
import Row from "./Row";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFood } from "../apis/foodApi";
import toast from "react-hot-toast";
import Modal from "./Modal";
import CreateFoodForm from "./CreateFoodForm";

const Image = styled.img`
  width: auto;
  height: inherit;
`;

const StyledRowCard = styled.div`
  display: flex;
  gap: 0.8rem;
  height: 14rem;
  width: 75%;
  border: 1px solid #ddd;
  margin-top: 3rem;
`;

const Container = styled.div`
  width: 100%;
  padding: 0.8rem;
`;

function RowCard({ food }) {
  const { name, price, _id } = food;
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
      <Image src="img-6.jpg" />
      <Container>
        <div>
          <h1>{name}</h1>
          <p>Shiro, karia, timatim</p>
        </div>
        <Row>
          <span>$ {price}</span>

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
                  editFood={food}
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
