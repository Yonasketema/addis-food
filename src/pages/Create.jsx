import React, { useReducer } from "react";
import styled from "styled-components";

import CreateNameForm from "../components/CreatePlaceForms/CreateNameForm";
import CreateLocationForm from "../components/CreatePlaceForms/CreateLocationForm";
import CreateProfileForm from "../components/CreatePlaceForms/CreateProfileForm";
import ProgressBar from "../components/ProgressBar";

const CreateLayout = styled.main`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 74vh;
  box-shadow: 0 10px 10px rgb(0 0 0 / 0.1);
`;

export const ADD_STEP = "ADD_STEP";
export const STEP_BACK = "STEP_BACK";
export const NAME_FROM = "NAME_FORM";
export const LOCATION_FORM = "LOCATION_FORM";
export const PROFILE_FORM = "PROFILE_FORM";

const initialState = {
  step: 1,
  restaurant_name: "",
  description: "",
  restaurant_image: null,
  restaurant_logo: null,
  phone_number: "",
  city: "",
  location_description: "",
  lng: "",
  lat: "",
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_STEP:
      return { ...state, step: state.step + 1 };
    case STEP_BACK:
      return { ...state, step: state.step - 1 };
    case NAME_FROM:
      return {
        ...state,
        step: state.step + 1,
        restaurant_name: action.payload.restaurant_name,
        description: action.payload.description,
      };
    case LOCATION_FORM:
      return {
        ...state,
        step: state.step + 1,
        lat: action.payload.lat,
        lng: action.payload.lng,
        phone_number: action.payload.phone_number,
        location_description: action.payload.location_description,
        city: action.payload.city,
      };
    case PROFILE_FORM:
      return {
        ...state,
        restaurant_image: action.payload.restaurant_image,
      };

    default:
      throw new Error("unknown Action");
  }
}

function Create() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ProgressBar step={state.step} numberOfStep={3} />
      <CreateLayout>
        {/* <CreatePlaceForm /> */}

        {state.step === 1 && (
          <CreateNameForm state={state} dispatch={dispatch} />
        )}
        {state.step === 2 && (
          <CreateLocationForm state={state} dispatch={dispatch} />
        )}
        {state.step === 3 && (
          <CreateProfileForm state={state} dispatch={dispatch} />
        )}
      </CreateLayout>
    </>
  );
}

export default Create;
