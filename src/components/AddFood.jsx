import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import CreateFoodForm from "./CreateFoodForm";

function AddFood() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => setIsOpenModal(!show))}>
        Add
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateFoodForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
export default AddFood;
