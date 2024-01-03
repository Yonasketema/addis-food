import React, { useState } from "react";

import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Form from "../ui/Form";
import { NAME_FROM } from "../../pages/Create";

function CreateNameForm({ dispatch, state }) {
  const [restaurant_name, setRestaurantName] = useState(
    state.restaurant_name || ""
  );
  const [description, setDescription] = useState(state.description || "");

  return (
    <Form type="vertical">
      <Input
        type="text"
        id="restaurantName"
        placeholder="Restaurant Name"
        value={restaurant_name}
        onChange={(e) => setRestaurantName(e.target.value)}
      />

      <Textarea
        type="text"
        id="description"
        placeholder="Tell us More About your Place ...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <FormRow>
        {restaurant_name && description ? (
          <Button
            onClick={() =>
              dispatch({
                type: NAME_FROM,
                payload: {
                  restaurant_name,
                  description,
                },
              })
            }
          >
            Next
          </Button>
        ) : (
          <Button variation="disabled" disabled>
            Next
          </Button>
        )}
      </FormRow>
    </Form>
  );
}

export default CreateNameForm;
