import { useState } from "react";
import TextInputForm from "./TextInputForm"; // Assuming this is a child component for the form layout
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState(""); 

  const navigate = useNavigate();

  function handleSubmitForm(event) {
    event.preventDefault();
    if (value) {
      console.log("Form submitted with value:", value);
      navigate('/play', { state: { wordSelected: value } });
    } else {
      console.error("No value entered");
    }
  }

  function handleTextInputChange(event) {
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  }

  return (
    <TextInputForm
      handleSubmitForm={handleSubmitForm}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
      inputType={inputType}
    />
  );
}

export default TextInputFormContainer;
