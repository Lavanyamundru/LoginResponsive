import React from "react";
import Sign from "./Sign"
import Signinscuccess from "./Signinscuccess";
import { useState } from "react";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <>
      {!formIsSubmitted ? (
        <Sign submitForm={submitForm} />
      ) : (
        <Signinscuccess />
      )}
    </>
  );
};

export default Form;
