import React, { useState } from "react";
import styled from "styled-components";
import { MdDelete, MdCloudUpload } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

import Button from "../Button";
import FormRow from "../FormRow";
import { STEP_BACK, PROFILE_FORM } from "../../pages/Create";
import { useCreatePlace } from "../../hooks/useCreatePlace";
import Spinner from "../Spinner";
import Heading from "../Heading";

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #1475cf;
  border-radius: 5px;
  height: 300px;
  width: 500px;
  cursor: pointer;
`;

const Image = styled.img`
  /* width: 100%; */
  height: 100%;
`;
const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

function CreateProfileForm({ state, dispatch }) {
  const [image, setImage] = useState(
    (state.restaurant_image && URL.createObjectURL(state?.restaurant_image)) ||
      ""
  );
  const [fileName, setFileName] = useState(state.restaurant_image?.name || "");

  const { isCreating, createPlace } = useCreatePlace();

  function handleCreatePlace() {
    createPlace(state);
  }

  if (isCreating) {
    return (
      <>
        <Spinner />
        <>Creating your place</>
      </>
    );
  }

  return (
    <>
      <Form onClick={() => document.getElementById("restaurant_image").click()}>
        <input
          type="file"
          id="restaurant_image"
          accept="image/*"
          hidden
          onChange={({ target: { files } }) => {
            dispatch({
              type: PROFILE_FORM,
              payload: { restaurant_image: files[0] },
            });

            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {image ? (
          <Image src={image} alt="" />
        ) : (
          <>
            <MdCloudUpload size={60} />
            <p>Put your front image</p>
          </>
        )}
      </Form>

      {fileName && (
        <ImageInfo>
          <AiFillFileImage size={15} />
          <span>{fileName}</span>
          <MdDelete
            size={20}
            onClick={() => {
              setFileName("No Selected File");
              setImage(null);
            }}
          />
        </ImageInfo>
      )}

      <FormRow>
        <Button onClick={() => dispatch({ type: STEP_BACK })}> Back</Button>
        {image && fileName ? (
          <Button onClick={handleCreatePlace}>Finish</Button>
        ) : (
          <Button variation="disabled" disabled>
            Finish
          </Button>
        )}
      </FormRow>
    </>
  );
}

export default CreateProfileForm;
